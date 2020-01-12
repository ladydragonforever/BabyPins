import BoardShow from "./board_show";
import {connect} from "react-redux";
import {fetchBoard, fetchBoards} from "../../actions/board";

const mSTP = (state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId]
})

const mDTP = dispatch => ({
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId))
})

export default connect(mSTP,mDTP)(BoardShow)