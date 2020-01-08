import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignUpFormContainer from "./session/signup_form_container";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Modal from "./modal/modal";
import WelcomeContainer from "./welcome/welcome_container";

const App = () => (
    <div>
        <Modal/>
        <Route exact path="/" component={WelcomeContainer}/>
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} />
    </div>
)
export default App;