import React from "react";
import {connect} from "react-redux";
import BoardForm from "./board_form";
import {updateBoard, deleteBoard, fetchBoard} from "../../actions/board";
import {withRouter} from "react-router-dom";
import { openModal, closeModal } from '../../actions/modal';

class EditForm extends React.Component {
    
    // componentDidMount(){
    //     const {board} = this.props
    //     if (!board) return null;
    //     this.props.fetchBoard(this.props.match.params.boardId)
    // }

    render(){
        const {board, formType, action, deleteBoard} = this.props;
        if (!board) return null;
        console.log("I'm console log test")
        return(
            <div>
                {console.log("Hello I'm EditForm")}
                
                <BoardForm
                board={board}
                formType={formType}
                action={action}/>

            </div>
        )
    }



}

const mSTP = (state, ownProps) => {
    console.log(state, ownProps, ownProps.match.params.boardId, "I'm in editform container")
    return({
    board: state.entities.boards[ownProps.match.params.boardId],
    formType: "Edit your board"
}) }

const mDTP = dispatch => ({
    action: (board) => dispatch(updateBoard(board)),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(EditForm));

