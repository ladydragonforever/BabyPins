import React from "react";
import {Link} from "react-router-dom";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Masonry from "../picture/masonry";
import Modal from "../modal/modal";

class BoardShow extends React.Component {

    componentDidMount(){

        this.props.fetchBoard(this.props.match.params.boardId)
    }
    render(){
        const {board} = this.props
        let brakePoints = [350, 500, 750];
        if (!board) return null;

        const display = board && board.pictures
            ? (
                // <ul>
                //     {
                //         board.pictures.map(picUrl => <li key={Math.floor(Math.random() * 1000)}>
                //             <img src={picUrl} alt="" />
                //         </li>)
                //     }
                // </ul>
                <div className="container" >
                    <div className="masonry-container">
                        <Masonry brakePoints={brakePoints}>
                            {
                                board.pictures.map(picUrl => <li 
                                        className="tile"
                                        key={Math.floor(Math.random() * 1000)}>
                                        <img src={picUrl} alt="" />
                                        </li>)
                            }
                        </Masonry>
                    </div>
                </div >
            )
            : (null)

        return(
            <div className="profile-main">
                <div className="profile-create">
                    <Link className="board-edit-icon" to={`/boards/${board.id}/edit`}><FontAwesomeIcon icon={faPen} /></Link>


                    <button onClick={()=>this.props.openModal('Edit Board')}>
                     Edit Board
                    </button>
                    <Modal boardId={board.id}/>
                    {/* <Link className="profile-create-text" to={`/boards/${board.id}/edit`}>Edit Board</Link> */}
                </div>
                
                
                <div className="profile-top">
                    <h3 className="profile-name">{board.title}</h3>
            
                </div>
               
                 {display}

            </div>
        )
    }
}

export default BoardShow;