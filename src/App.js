import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavbarPage from "../src/components/layout/NavbarPage";
import User from "./components/layout/User";
import Home from "./components/home/Home";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

console.log(
  "Hello There Developer welcome back to my Github Finder Application."
);
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <NavbarPage />
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:login" component={User} />
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
