import React from "react";
import {NavLink, Link} from "react-router-dom";
import BoardIndexContainer from "../boards/board_index_container";
import PinIndexContainer from "../pins/pin_index_container";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateBoardContainer from "../boards/create_board_container";
import Modal from "../modal/modal";

class Profile extends React.Component {


    render(){
        const {formType, currentUser} = this.props;

        let component;

        if (formType === "Boards") component = <BoardIndexContainer/>;

        if (formType === "Pins") component = <PinIndexContainer/>;

        const name = currentUser? currentUser.email.split("@")[0].split(".")[0] : null
        return(
            <div className="profile-main">
                <div className="profile-create">
                    <div className="profile-create-icon" ><FontAwesomeIcon icon={faPlus} /></div>
                    
                   <button onClick={()=>this.props.openModal("CreateBoard")}>Create Board</button>
                   <Modal>
                       <CreateBoardContainer/>
                   </Modal> 
                    {/* <Link className="profile-create-text" to="/boards/new">Create Board</Link> */}
                </div>
                
                
                <div className="profile-top">
                    <h3 className="profile-name">{name}</h3>
                    <div className="profile-photo"> </div>
                </div>
                
                <div className="profile-select">
                    <div className="profile-boards">
                        <NavLink 
                            activeClassName="profile-active-link"
                        to="/profile/boards">
                            Boards
                        </NavLink>
                    </div>
                    <div className="profile-pins">
                        <NavLink 
                            activeClassName="profile-active-link"
                            to="/profile/pins">
                            Pins
                        </NavLink>
                    </div>
                </div>
        

                <div>
                    {component}
                </div>
            </div>
        )
    }
}


export default Profile;
