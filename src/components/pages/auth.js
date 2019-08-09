import React, { Component } from "react";
import loginImg from "../../../static/assets/pictures/auth-picture.jpg";
import Login from '../auth/login'

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin();
    }

    render() {
        return (
            <div className="auth-page-wrapper">
                <div
                    className="auth-left-side" 
                    style={{
                        backgroundImage: `url(${loginImg})`
                        
                    }}
                />


                <div className="auth-right-side">
                    <Login
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                    />
                </div>
            </div>
        );
    }

    
}