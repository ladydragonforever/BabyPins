import React from "react";
import {Link} from "react-router-dom";
import BoardIndexContainer from "../boards/board_index_container";
import PinIndexContainer from "../pins/pin_index_container";

class Profile extends React.Component {


    render(){
        const {formType, currentUser} = this.props;

        let component;

        if (formType === "Boards") component = <BoardIndexContainer/>;

        if (formType === "Pins") component = <PinIndexContainer/>

        const name = currentUser? currentUser.email.split("@")[0].split(".")[0] : null
        return(
            <div>
                <h3>{name}</h3>

                <Link to="/profile/boards">
                Boards
                </Link>

                <Link to="/profile/pins">
                Pins
                </Link>

                <div>
                    {component}
                </div>
            </div>
        )
    }
}


export default Profile;
