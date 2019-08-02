import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class navContainer extends Component {
    constructor() {
        super();
    }



    render() {
        return (
            <div>
                <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                <NavLink exact to="/about-us" activeClassName="nav-link-active">About Us</NavLink>
                <NavLink exact to="/hall-of-fame" activeClassName="nav-link-active">Hall of Fame</NavLink>
                <NavLink exact to="/events" activeClassName="nav-link-active">Events</NavLink>
                <NavLink exact to="/shop" activeClassName="nav-link-active">Shop</NavLink>
                <NavLink exact to="/contact-us" activeClassName="nav-link-active">Contact Us</NavLink>
                <NavLink exact to="/event-manager" activeClassName="nav-link-active">Event Manager</NavLink>


                {false ? <button>Event Manager</button> : ''}
            </div>
        )
    }

}