import React from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { withRouter } from "react-router";
import SignOut from "../../../static/assets/pictures/header-logo2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navContainer = (props)=> {
    const dynamicLink = (route, linkText) => {
        return(
            <div className="nav-link-wrapper">
            <NavLink exact to="/beer-manager" activeClassName="nav-link-active">
                Beer Manager
            </NavLink>
        </div>
        );
    };

    const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", { withCredentials : true}).then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        }).catch(error => {
            console.log("Error sign out", error)
        })
    };



        return (
            <div className="nav-wrapper">
                <div className="left-side">

                    <div className="home-header-logo">
                        <img src= {SignOut} />
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/about-us" activeClassName="nav-link-active">About Us</NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/hall-of-fame" activeClassName="nav-link-active">Hall of Fame</NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/events" activeClassName="nav-link-active">Events</NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/shop" activeClassName="nav-link-active">Shop</NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/contact-us" activeClassName="nav-link-active">Contact Us</NavLink>
                    </div>



                </div>

                <div className="right-side">

                {props.loggedInStatus === "LOGGED_IN" ? 
                    <a className="sign-out-icon" onClick={handleSignOut}><FontAwesomeIcon icon= "sign-out-alt" /></a>
                 : null}                        

                {props.loggedInStatus === "LOGGED_IN" ? (
                    dynamicLink("/beer-manager", "Beer Manager")
                ) : null}                


                </div>
            </div>
        )
    }

    export default withRouter(navContainer);