import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import BreweryContainer from './brewery-container';
import NavContainer from './navigation/nav-container';
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import HallOfFame from "./pages/hall-of-fame";
import Events from "./pages/events";
import Shop from "./pages/shop";
import ContactUs from "./pages/contact-us";
import EventManager from "./pages/event-manager";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/hall-of-fame" component={HallOfFame} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/contact-us" component={ContactUs} />
              <Route exact path="/event-manager" component={EventManager} />
            </Switch>
          </div>
        </Router>

        <BreweryContainer />
        
      </div>
    );
  }
}
