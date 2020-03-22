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
import ProfilePinContainer from "./profile/profile_pin_container"
import BoardShowContainer from "./boards/board_show_container";
// import CreateBoardContainer from "./boards/create_board_container";
// import EditBoardContainer from "./boards/edit_board_container";
// import PinIndexContainer from "./pins/pin_index_container";
import ProfileBoardContainer from "./profile/profile_board_container";
import SearchContainer from "./search/search_container"
const App = () => (
    <div>
        {/* <Modal><CreateBoardContainer /></Modal> */}
        <Switch>
        
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/" component={Welcome}/>  
            {/* <Redirect to="/"/> */}
        </Switch>
        <ProtectedRoute exact path="/" component={SearchContainer} />
        <ProtectedRoute path="/" component={NavBarContainer} />

        <ProtectedRoute exact path="/" component={PictureIndexContainer} />
        <ProtectedRoute exact path="/pictures/:pictureId" component={PictureShowContainer} />
        <ProtectedRoute exact path="/profile/boards" component={ProfileBoardContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileBoardContainer}/>
        <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer}/>
        <ProtectedRoute exact path="/profile/pins" component={ProfilePinContainer}/> 
        {/* <ProtectedRoute exact path="/boards/new" component={CreateBoardContainer}/> */}
        {/* <ProtectedRoute exact path="/boards/:boardId/edit" component={EditBoardContainer} /> */}
        

        
    </div>

)
export default App;