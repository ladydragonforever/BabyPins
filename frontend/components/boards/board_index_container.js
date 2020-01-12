import BoardIndex from "./board_index";
import {connect} from "react-redux";
import {fetchBoards} from "../../actions/board"

const mSTP = state => {

    const boards = state.entities.boards

    return ({
    boards: Object.values(boards),
    
})} 

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards())
})

export default connect(mSTP, mDTP)(BoardIndex);