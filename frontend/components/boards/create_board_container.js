import BoardForm from "./board_form";
import {createBoard} from "../../actions/board";
import { connect } from "react-redux";
import { openModal, closeModal } from '../../actions/modal';
import React from "react";

const mSTP = state => ({
    board: {
        title: "",
        description: ""
    },

    formType: "Create your board"

})

const mDTP = dispatch => ({
    action: (board)=> dispatch(createBoard(board)),
    otherForm: (
        <button onClick={() => dispatch(openModal('Create Board'))}>
            Create Board
       </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(BoardForm);