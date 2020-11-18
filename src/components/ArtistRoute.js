import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  receiveArtistProfile,
  requestArtistProfile,
  requestArtistProfileError,
} from "../actions";
import { fetchArtistProfile } from "../helpers/api-helpers";

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

  if (artistStatus.status === "loading" || !artist) {
    return <h1>Loading</h1>;
  }

  return <p>Artist</p>;
};

export default ArtistRoute;
