import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Home from "./Home";

function Routes() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path={`/`} exact component={(props) => <App {...props} />} />
          <Route
            path={`/home`}
            exact
            component={(props) => <Home {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
