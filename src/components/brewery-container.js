import React, { Component } from "react";
import moment from "moment";
import BreweryItem from "./brewery-items"

export default class BreweryContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to Treble Hook",
            isLoading: false,
            data: [
                {title: "Beer 1", category: "Dark"},
                {title: "Beer 2", category: "Light"},
                {title: "Beer 3", category: "Specialty"}
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    breweryItems() {
        return this.state.data.map( item => {
            return <BreweryItem title={item.title} url={"google.com"}/>;
        }) 
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    render() {
        if(this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h1>Treble Hook Project</h1>
                <h2>Dane, this is for you buddy!</h2>
                {moment().format('MMMM Do YYYY, h:mm:ss a')}
                <h2>Brewery details go here.</h2>

                <h2>{this.state.pageTitle}</h2>

                {this.breweryItems()}

                <button onClick={() => this.handleFilter('Dark')}>Dark</button>
                <button onClick={() => this.handleFilter('Light')}>Light</button>
                <button onClick={() => this.handleFilter('Specialty')}>Specialty</button>

            </div>
        )
    }
}