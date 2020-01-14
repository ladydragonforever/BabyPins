import React from "react";
import {Link} from "react-router-dom";
import BoardIndexContainer from "../boards/board_index_container";
import PinIndexContainer from "../pins/pin_index_container";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Profile extends React.Component {


    render(){
        const {formType, currentUser} = this.props;

        let component;

        if (formType === "Boards") component = <BoardIndexContainer/>;

        if (formType === "Pins") component = <PinIndexContainer/>

        const name = currentUser? currentUser.email.split("@")[0].split(".")[0] : null
        return(
            <div className="profile-main">
                <div className="profile-create">
                    <div className="profile-create-icon"><FontAwesomeIcon icon={faPlus} /></div>
                    <Link className="profile-create-text" to="/boards/new">Create Board</Link>
                </div>
                
                
                <div className="profile-top">
                    <h3 className="profile-name">{name}</h3>
                    <div className="profile-photo"> </div>
                </div>
                
                <div className="profile-boards">
                    <Link to="/profile/boards">
                        Boards
                    </Link>
                </div>
                <div className="profile-pins">
                    <Link to="/profile/pins">
                        Pins
                    </Link>
                </div>

               

               

                <div>
                    {component}
                </div>
            </div>
        )
    }
}


export default Profile;
