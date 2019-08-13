import React, { Component } from 'react';
import axios from 'axios';

import BeerSideBarList from '../pages/brewery/beer-sidebar-list';
import BeerForm from '../management/beer-form'

class BeerManager extends Component {
    constructor() {
        super();

        this.state = {
            breweryItems: [],
            beerToEdit: {

            }
        };

        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
        this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearToEdit = this.clearToEdit.bind(this);
    }

    clearToEdit() {
        this.setState({
            beerToEdit: {}
        });
    }

    handleEditClick(beerItem) {
        this.setState({
            beerToEdit: beerItem
        });
    }

    handleDeleteClick(beerItem) {
        axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${beerItem.id}`, 
        { withCredentials: true })
        .then(response => {
            this.setState({
                breweryItems: this.state.breweryItems.filter(item => {
                    return item.id != beerItem.id;
                })
            });

            return response.data;
        }).catch(error => {
            console.log("error", error)
        })
    }

    handleEditFormSubmission() {
        this.getBreweryItems();
    }

    handleNewFormSubmission(beerItem) {
        this.setState({
            breweryItems: [beerItem].concat(this.state.breweryItems)
        })
    }

    handleFormSubmissionError(error) {
        console.log("error", error)
    }

    getBreweryItems() {
        axios.get("https://huntercoleman.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { withCredentials : true }).then(response => {
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
                        handleNewFormSubmission={this.handleNewFormSubmission}
                        handleEditFormSubmission={this.handleEditFormSubmission}
                        handleFormSubmissionError = {this.handleFormSubmissionError}
                        clearToEdit = {this.clearToEdit} 
                        beerToEdit={this.state.beerToEdit}
                    />
                </div>

                <div className="right-column">
                    <h1>
                        <BeerSideBarList 
                        data={this.state.breweryItems} 
                        handleDeleteClick={this.handleDeleteClick} 
                        handleEditClick={this.handleEditClick} />
                    </h1>
                </div>
            </div>
        );
    }
}

export default BeerManager;