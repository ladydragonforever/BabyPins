import BoardForm from "./board_form";
import {createBoard} from "../../actions/board";
import { connect } from "react-redux";

const mSTP = state => ({
    board: {
        title: "",
        description: ""
    },

    formType: "Create your board"

})

const mDTP = dispatch => ({
    action: (board)=> dispatch(createBoard(board))
})

export default connect(mSTP, mDTP)(BoardForm);