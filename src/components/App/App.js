import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import ArtistRoute from "../ArtistRoute";

const DEFAULT_ARTIST_ID = "5INjqkS1o8h1imAzPqGZBb";

const App = () => {
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
