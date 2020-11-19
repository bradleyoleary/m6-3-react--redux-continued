import { CircularProgress } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  receiveArtistProfile,
  requestArtistProfile,
  requestArtistProfileError,
} from "../actions";
import { fetchArtistProfile } from "../helpers/api-helpers";
import { COLORS } from "./constants";
import Header from "./Header";
import Tags from "./tags";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  //console.log(accessToken);
  const artist = useSelector((state) => state.artists.currentArtist);
  const artistStatus = useSelector((state) => state.artists.status);
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(artist);

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }
    try {
      dispatch(requestArtistProfile());

      fetchArtistProfile(accessToken, id).then((json) =>
        dispatch(receiveArtistProfile(json))
      );
    } catch (err) {
      console.log(err);
      dispatch(requestArtistProfileError);
    }
  }, [accessToken, id]);

  if (!artist || artistStatus.status === "loading") {
    return (
      <Loader>
        <CircularProgress size={100} />
      </Loader>
    );
  }

  return (
    <Wrapper>
      <Header
        imgSrc={artist.profile.images[0].url}
        name={artist.profile.name}
        followerTotal={artist.profile.followers.total}
      />
      <Tags genres={artist.profile.genres} />
    </Wrapper>
  );
};

const Loader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;

export default ArtistRoute;
