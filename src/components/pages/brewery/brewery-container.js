import React, { Component } from "react";
import moment from "moment";
import axios from 'axios';

import BreweryItem from "./brewery-items"

export default class BreweryContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to Treble Hook",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    getBreweryItems() {
        axios
          .get('https://huntercoleman.devcamp.space/portfolio/portfolio_items')
          .then(response => {
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch(error => {
            console.log(error);
        });
    }

    breweryItems() {
        return this.state.data.map( item => {
            return (
            <BreweryItem key={item.id} title={item.name} url={item.url} slug={item.id}/>
            );
        }); 
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    componentDidMount() {
        this.getBreweryItems();
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

                <button onClick={() => this.handleFilter('Dark')}>Dark</button>
                <button onClick={() => this.handleFilter('Light')}>Light</button>
                <button onClick={() => this.handleFilter('Specialty')}>Specialty</button>

                {this.breweryItems()}



            </div>
        )
    }
}