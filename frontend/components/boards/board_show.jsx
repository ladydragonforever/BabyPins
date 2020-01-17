import React from "react";
import {Link} from "react-router-dom";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Masonry from "../picture/masonry";
import Modal from "../modal/modal";
import EditBoardContainer from '../boards/edit_board_container';

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
                                board.pictures.map(pic => <li 
                                        className="tile"
                                        key={Math.floor(Math.random() * 1000)}>
                                        <img src={pic.url} alt="" />
                                        <FontAwesomeIcon icon={faTrashAlt} 
                                        onClick={() => this.props.deletePin(this.props.match.params.boardId, pic.id)}/>
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
                    <FontAwesomeIcon icon={faPen} />
                    <button onClick={()=>this.props.openModal('Edit Board')}>
                     Edit Board
                    </button>
                    <Modal boardId={board.id}>
                        <EditBoardContainer boardId={board.id} />
                    </Modal>
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