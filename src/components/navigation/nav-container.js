import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class navContainer extends Component {
    constructor() {
        super();
    }



    render() {
        return (
            <div>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/about-us">About Us</NavLink>
                <NavLink exact to="/hall-of-fame">Hall of Fame</NavLink>
                <NavLink exact to="/events">Events</NavLink>
                <NavLink exact to="/shop">Shop</NavLink>
                <NavLink exact to="/contact-us">Contact Us</NavLink>
                <NavLink exact to="/event-manager">Event Manager</NavLink>


                {false ? <button>Event Manager</button> : ''}
            </div>
        )
    }

}