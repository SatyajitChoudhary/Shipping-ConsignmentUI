import React,{useEffect} from "react";
import { BrowserRouter, Route, Switch, useHistory,useRouteMatch } from "react-router-dom";
import App from "../App";
import Home from "./Home";

function Routes() {
//   useEffect(() => {
//     history.push("/");
//   }, []);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path={`/`} exact component={(props) => <App {...props} />}/>
          <Route path={`/home`} exact component={(props) => <Home {...props} />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
