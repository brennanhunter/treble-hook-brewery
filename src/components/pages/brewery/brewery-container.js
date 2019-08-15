import React, { Component } from "react";
import moment from "moment";
import axios from 'axios';
import { Link } from "react-router-dom";

import BreweryItem from "./brewery-items";
import Logo from "../../../../static/assets/pictures/header-logo2.jpg"
import FamePic from "../../../../static/assets/pictures/man-with-fish.jpg"

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
            <BreweryItem
                key={item.id}
                item={item}
                />
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

                <div className="site-header">
                    <img className="header-logo" src={Logo} />
                    <h1>Welcome To Treble Hook Brewery</h1>
                </div>

                <div className="brewery-items-wrapper">
                    {this.breweryItems()}   
                </div>

                <div className = "hall-of-fame-link">
                    <img className="hall-of-fame-image" src={FamePic} />
                    <Link to="./hall-of-fame"><button>Our Wall of Fame</button></Link>
                </div>

                <div className="footer">
                    
                </div>
                
            </div>
        )
    }
}