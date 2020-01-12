import React from "react";
import LoginFormContainer from "./session/login_form_container";
import SignUpFormContainer from "./session/signup_form_container";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute, } from "../util/route_util";
import Modal from "./modal/modal";
import Welcome from "./welcome/welcome";
import NavBarContainer from "./nav_bar/nav_container";
import PictureIndexContainer from "./picture/picture_index_container";
import PictureShowContainer from "./picture/picture_show_container";
import BoardIndexContainer from "./boards/board_index_container";

const App = () => (
    <div>
        {/* <Modal/> */}
        <NavBarContainer/>
        <ProtectedRoute exact path="/" component={PictureIndexContainer} />
        <ProtectedRoute exact path="/boards" component={BoardIndexContainer} /> 
        <ProtectedRoute exact path="/boards/:boardId" component={BoardEditContainer} />
        {/* <ProtectedRoute exace path="/boards/" */}
        <Switch>
            <ProtectedRoute exact path="/pictures/:pictureId" component={PictureShowContainer} />
        
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/" component={Welcome}/>  
            {/* <Redirect to="/"/> */}
        </Switch>
    </div>

)
export default App;