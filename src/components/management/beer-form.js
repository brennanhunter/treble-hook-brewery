import React, { Component } from 'react';
import axios from 'axios';

class beerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            url: "",
            category: "",
            position: "",
            thumb_image: "",
            banner_image: "",
            logo: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {

        axios
        .post(
          "https://huntercoleman.devcamp.space/portfolio/portfolio_items",
          this.buildForm(),
          { withCredentials: true }
        ).then(response => {
            console.log("response", response)
        }).catch(error => {
            console.log("error in form handle submit", error)
        })

        event.preventDefault();
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);

        return formData
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Beer Form</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                        type="text"
                        name="name"
                        placeholder="Beer Name"
                        value = {this.state.name}
                        onChange={this.handleChange} />  
                        
                        <input
                        type="text"
                        name="url"
                        placeholder="URL"
                        value = {this.state.url}
                        onChange={this.handleChange} />
                    </div>

                    <div>
                        <input
                        type="text"
                        name="position"
                        placeholder="position"
                        value = {this.state.position}
                        onChange={this.handleChange} />  
                        
                        <select
                        name="category"
                        value = {this.state.category}
                        onChange={this.handleChange}>
                            <option value="eCommerce"></option>
                        </select>
                    </div>

                    <div>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value = {this.state.description}
                        onChange={this.handleChange} />

                    </div>

                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default beerForm;