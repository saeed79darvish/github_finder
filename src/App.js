import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/components/home/Home";
import About from "./components/about/About";
import NavbarPage from "../src/components/layout/NavbarPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarPage />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    );
  }
}

export default App;
