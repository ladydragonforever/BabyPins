import React from "react";
import {connect} from "react-redux";
import BoardForm from "./board_form";
import {updateBoard, deleteBoard, fetchBoard} from "../../actions/board";
import {withRouter} from "react-router-dom";

class EditForm extends React.Component {
    
    componentDidMount(){
        const {board} = this.props
        if (!board) return null;
        this.props.fetchBoard(this.props.board.id)
    }

    render(){
        const {board, formType, action, deleteBoard} = this.props;
        if (!board) return null;
        return(
            <div>
                
                <BoardForm
                board={board}
                formType={formType}
                action={action}/>
                <button onClick={()=> deleteBoard(board.id)}>Delete</button>
            </div>
        )
    }



}

const mSTP = (state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId],
    formType: "Edit your board"
})

const mDTP = dispatch => ({
    action: (board) => dispatch(updateBoard(board)),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId))
})

export default withRouter(connect(mSTP, mDTP)(EditForm));

