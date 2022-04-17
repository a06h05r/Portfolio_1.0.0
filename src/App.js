import "./css/styles.css";
import "./css/reset.css";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import Portfolio from "./Page/Portfolio/Portfolio";
import PortfolioIllust from "./Page/Portfolio/PortfolioIllust";
import PortfolioWebdesign from "./Page/Portfolio/PortfolioWebdesign";
import PortfolioPhoto from "./Page/Portfolio/PortfolioPhoto";
import Contact from "./Page/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/portfolio/:illust">
          <PortfolioIllust />
        </Route>
        <Route path="/portfolio/:webdesign">
          <PortfolioWebdesign />
        </Route>
        <Route path="/portfolio/:photo">
          <PortfolioPhoto />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
