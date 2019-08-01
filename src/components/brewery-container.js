import React, { Component } from "react";
import moment from "moment";
import BreweryItem from "./brewery-items"

export default class BreweryContainer extends Component {
    constructor() {
        super()
        console.log("Welcome to the Brewery!")
    }
    render() {
        return (
            <div>
                <h1>Treble Hook Project</h1>
                <h2>Dane, this is for you buddy!</h2>
                {moment().format('MMMM Do YYYY, h:mm:ss a')}
                <h2>Brewery details go here.</h2>

                <BreweryItem />
            </div>
        )
    }
}