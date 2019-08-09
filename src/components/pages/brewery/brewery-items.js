import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class BreweryItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breweryItemClass: ""
        };
    }

    handleMouseEnter() {
        this.setState({breweryItemClass: "image-blur"});
    }

    handleMouseLeave() {
        this.setState({breweryItemClass: ""});
    }

    render() {
        const {id, description, thumb_image_url, logo_url} = this.props.item;
        return (
            <div className="brewery-item-wrapper"
            onMouseEnter={() => this.handleMouseEnter()}
            onMouseLeave={() => this.handleMouseLeave()}
            >
                <div
                    className={"brewery-img-background " + this.state.breweryItemClass}
                    style={{
                        backgroundImage: "url(" + thumb_image_url + ")"
                    }}
                />

                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url} />
                    </div>

                    <div className="subtitle">
                        {description}
                    </div>
                </div>  
            </div>

            
        );
    }
}