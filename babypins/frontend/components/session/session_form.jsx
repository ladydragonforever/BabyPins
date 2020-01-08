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
        const link = formType === "Log in" ? "Sign up" : "Log in"
        const messages = errors.length >= 1
            ? (
                <ul>
                    errors.map(error => <li>{error}</li>)
                </ul>
            )
            : null


        return (
            <div className="session-main">

                <Link to={path}>{link}</Link>
                <h3>Welcome to Pinterest</h3>

                <form onSubmit={this.handleSubmit}>

                {messages}
                    <div>
                       <input 
                            className=""
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                            placeholder='Email'
                        />

                    </div>

                    <label>Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}
                        />

                    </label>

                    <button>{formType}</button>
                </form>
            </div>
        );
    }

}


export default SessionForm;