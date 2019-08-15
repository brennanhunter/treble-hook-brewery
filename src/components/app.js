import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt, faEdit, faEraser, faPhone, faEnvelope, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"

import NavContainer from './navigation/nav-container';
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import HallOfFame from "./pages/hall-of-fame";
import Events from "./pages/events";
import Shop from "./pages/shop";
import ContactUs from "./pages/contact-us";
import BeerManager from "./pages/beer-manager";
import BreweryDetail from "./pages/brewery/brewery-detail";
import NoMatch from "./pages/no-match";
import Auth from "./pages/auth"

library.add(faTrash, faSignOutAlt, faEdit, faEraser, faPhone, faEnvelope, faMapMarkedAlt)

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin= this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout= this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  };
  
  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in",
      { withCredentials: true
      }).then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if(loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if(loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if(!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error)
      })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route key= "beer-manager" exact path="/beer-manager" component={BeerManager} />
    ]
  }


  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavContainer 
              loggedInStatus={this.state.loggedInStatus} 
              handleSuccessfulLogout={this.handleSuccessfulLogout}  
            />
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/auth"
                render={props => (
                  <Auth
                  {...props}
                  handleSuccessfulLogin ={this.handleSuccessfulLogin}
                  handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                  />
                )
              }
              />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/hall-of-fame" component={HallOfFame} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/contact-us" component={ContactUs} />
              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
              <Route exact path="/brewery/:slug" component={BreweryDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
