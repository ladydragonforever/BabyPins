import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(title) {
        return (e) => {
            this.setState({ [title]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { formType, signUp, login } = this.props;
        // debugger;
        if (formType === "Sign up") {
             signUp(this.state)

        } else if (formType === "Log in") {
             login(this.state)
        }
    }

    render() {
        const { errors, formType } = this.props;
        const path = formType === "Sign up" ? "/login" : "/signup";
        const link = formType === "Log in" ? "Sign up" : "Log in";
        console.log(errors);
        const messages = errors.length >= 1 
            ? (
                <ul>
                    {errors.map(error => (<li>{error}</li>))}
                </ul>
            ) : null


        return (
            <div className="modal-main" >
                <div className="modal-background-background">
                    <div className="modal-background">
                    </div>
                </div>

                    <Link to={path}>
                        <div className="session-link">
                            {link}
                        </div>
                    </Link>
                <div className="modal-child">
            <div className="session-main">
                <div className="session-box">
                    <h3>Welcome to Baby Pins</h3>

                    <form onSubmit={this.handleSubmit} className="session-form">

                        {messages}
                        <div className="session-input">
                            <input
                                className="session-input-email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                                placeholder='Email'
                            />

                        </div>

                        <div className="session-input">
                            <input
                                className="session-input-password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange("password")}
                                placeholder="Password"
                            />

                        </div>

                        <button className="session-button" >{formType}</button>
                    </form>
                </div>
                
            </div>
                </div>
            </div>


        );
    }

}


export default SessionForm;