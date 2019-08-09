import React, { Component } from 'react';
import axios from 'axios';

import BeerSideBarList from '../pages/brewery/beer-sidebar-list';
import BeerForm from '../management/beer-form'

class BeerManager extends Component {
    constructor() {
        super();

        this.state = {
            breweryItems: []
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(beerItem) {

    }

    handleFormSubmissionError(error) {
        console.log("error", error)
    }

    getBreweryItems() {
        axios.get("https://huntercoleman.devcamp.space/portfolio/portfolio_items", { withCredentials : true }).then(response => {
            this.setState({
                breweryItems: [...response.data.portfolio_items]
            })
        }).catch(error => {
            console.log("error brewery items", error)
        })
    }

    componentDidMount() {
        this.getBreweryItems();
    }



    render() {
        return (
            <div className="beer-manager-wrapper">
                <div className="left-column">
                    <BeerForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError = {this.handleFormSubmissionError}
                    />
                </div>

                <div className="right-column">
                    <h1>
                        <BeerSideBarList data={this.state.breweryItems} />
                    </h1>
                </div>
            </div>
        );
    }
}

export default BeerManager;