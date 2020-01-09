import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignUpFormContainer from "./session/signup_form_container";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute, } from "../util/route_util";
import Modal from "./modal/modal";
import Welcome from "./welcome/welcome";
import NavBarContainer from "./nav_bar/nav_container";

const App = () => (
    <div>
        {/* <Modal/> */}
        <ProtectedRoute exact path="/" component={NavBarContainer}/>
        <Switch>
            <AuthRoute exact path="/" component={Welcome}/>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignUpFormContainer} />
            <Redirect to="/"/>
        </Switch>
    </div>
)
export default App;