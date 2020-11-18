import React from "react";
import { useSelector } from "react-redux";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  //console.log(accessToken);
  return accessToken;
};

export default ArtistRoute;
