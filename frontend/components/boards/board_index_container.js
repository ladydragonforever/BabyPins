import BoardIndex from "./board_index";
import {connect} from "react-redux";
import {fetchBoards} from "../../actions/board"

const mSTP = state => {

   if (!state) return ({boards: {}});

   const curUserId = state.session.id; 
   
   if (curUserId===undefined) return ({boards: {}});
    
   const curUser = state.entities.users[curUserId]

   if (curUser===undefined) return ({boards: {}})

   const curUserBoardIds = curUser.boardIds 
   
   if (curUserBoardIds===undefined || curUserBoardIds.length===0) return({boards: {}}) 

   if (state.entities.boards === undefined || Object.keys(state.entities.boards).length===0) return ({boards: {}})

//    console.log(curUserBoardIds, state.entities.boards)
   
    const boards = curUserBoardIds.map (id => state.entities.boards[id])
    return ({boards })
    
} 

const mDTP = dispatch => ({
    fetchBoards: () => dispatch(fetchBoards())
})

export default connect(mSTP, mDTP)(BoardIndex);