import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Nav from "./Menu";
import React from "react";
import Employee from "./Employee";
import Aboutus from "./Aboutus";
import Data from "./Data";
import Photos from "./Photos";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Aboutus} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/employee" exact component={Employee} />
          <Route path="/data" exact component={Data} />
          <Route path="/photos" exact component={Photos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
