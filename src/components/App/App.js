import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import ArtistRoute from "../ArtistRoute";
import {
  receiveAccessToken,
  receiveAccessTokenError,
  requestAccessToken,
} from "../../actions";

import { useDispatch } from "react-redux";

const DEFAULT_ARTIST_ID = "5INjqkS1o8h1imAzPqGZBb";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestAccessToken());

    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch((err) => {
        console.error(err);
        dispatch(receiveAccessTokenError());
      });
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Redirect to={`artist/${DEFAULT_ARTIST_ID}`} />
        </Route>
        <Route path="/artist/:id">
          <ArtistRoute />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
