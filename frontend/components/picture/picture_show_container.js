import PictureShow from "./picture_show";
import { connect } from "react-redux";
import {requestPicture} from "../../actions/picture";
import {fetchBoards} from "../../actions/board";

const getBoards = (state) => {
    if (!state) return [];

    const curUserId = state.session.id;

    if (curUserId === undefined) return [];

    const curUser = state.entities.users[curUserId]

    if (curUser === undefined) return [];

    const curUserBoardIds = curUser.boardIds

    if (curUserBoardIds === undefined || curUserBoardIds.length === 0) return [];

    if (state.entities.boards === undefined || Object.keys(state.entities.boards).length === 0) return [];

    //    console.log(curUserBoardIds, state.entities.boards)

    const boards = curUserBoardIds.map(id => state.entities.boards[id])
    return boards;
}


const mSTP = (state, ownProps) => {
    // debugger;
    console.log(state);
    console.log(getBoards(state));
    return {
    picture: state.entities.pictures[ownProps.match.params.pictureId],
    boards: getBoards(state)
}}

const mDTP = dispatch => ({
    requestPicture: (pictureId) => dispatch(requestPicture(pictureId)),
    fetchBoards: () => dispatch(fetchBoards())
})

export default connect(mSTP, mDTP)(PictureShow);