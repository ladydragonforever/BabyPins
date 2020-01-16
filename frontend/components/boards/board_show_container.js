import BoardShow from "./board_show";
import {connect} from "react-redux";
import {fetchBoard} from "../../actions/board";
import React from "react";
import { withRouter } from "react-router-dom";
import { openModal, closeModal } from '../../actions/modal';

const mSTP = (state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId]
});

const mDTP = dispatch => ({
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
    openModal: () => dispatch(openModal("Edit Board")),
    // otherForm: (
    //     <button onClick={() => dispatch(openModal('Edit Board'))}>
    //         Edit Board
    //    </button>
    // // ),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mSTP,mDTP)(BoardShow))