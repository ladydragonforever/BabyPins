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
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    handleChange(title) {
        return (e) => {
            this.setState({ [title]: e.currentTarget.value })
        }
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = {
            email: "NewDaddy@demo.com",
            password: "123456"
        }
        this.demo(user);
    }

    handleSubmit(e) {
        // debugger;
        e.preventDefault();
        const { formType, signUp, login } = this.props;
    
        if (formType === "Sign up") {
             signUp(this.state)

        } else if (formType === "Log in") {
             login(this.state)
        }
    }


    componentWillUnmount(){
        this.props.clearErrors();
    }

    demo(user) {
        const intervalSpeed = 75;
        
        const { email, password } = user;
        const {formType,login} = this.props;
        const demoEmailTime = email.length * intervalSpeed;
        const demoPasswordTime = password.length * intervalSpeed;
        const buffer = intervalSpeed * 2;
        const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;

        this.demoEmail(email, intervalSpeed);

        setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);

        if (formType === "Sign up") {
            setTimeout(() => login(user), totalDemoTime)
        } else if (formType === "Log in") {
            setTimeout(() => login(user), totalDemoTime)
        }

    }

    demoEmail(email, intervalSpeed) {
        let i = 0;

        setInterval(() => {
            if (i <= email.length) {
                this.setState({ email: email.slice(0, i) })
                i++
            } else {
                clearInterval()
            }
        }, intervalSpeed);
    }

    demoPassword(password, intervalSpeed) {
        let j = 0;

        setInterval(() => {
            if (j <= password.length) {
                this.setState({ password: password.slice(0, j) })
                j++
            } else {
                clearInterval();
            }
        }, intervalSpeed);
    }
    
    render() {
        const { errors, formType } = this.props;
        const path = formType === "Sign up" ? "/login" : "/signup";
        const link = formType === "Log in" ? "Sign up" : "Log in";

        const button = formType === "Log in" 
        ? (
            <div>
                <p className="demo-or">OR</p>
                <button className="demo-button"
                
                    onClick={this.handleDemoSubmit}
                    value="Demo Sign In">
                    <span>Demo User</span>
                </button>
            </div>
        )
        : null
       
        const messages = errors.length >= 1 
            ? (
                <ul>
                    {errors.map((error,idx) => (<li key={idx} className="session-error">{error}</li>))}
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

                            <img src={window.imagesUrl.logo} className="logo" />
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
                                <div className="session-button-cont">
                                <button className="session-button" >{formType}</button>
                                </div>

                                <div className="demo-cont"> {button} </div>
                               

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}


export default SessionForm;