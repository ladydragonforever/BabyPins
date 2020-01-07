import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignUpFormContainer from "./session/signup_form_container";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Welcome from "./welcome/welcome";

const App = () => (
    <div>
        <Route exact path="/" component={Welcome}/>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
)
export default App;