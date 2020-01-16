import { RECEIVE_CURRENT_USER } from "../actions/session";
import { REMOVE_BOARD, RECEIVE_BOARD } from "../actions/board";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.payload.id]: action.payload });
        case REMOVE_BOARD:
            //users.1.boardId[]
            let newUsers = {};
            Object.keys(state).map( (curUserId) => { 
                let curBoardIds = state[curUserId].boardIds.filter((v) => v !== action.payload);
                newUsers[curUserId] = {...state[curUserId], boardIds: curBoardIds}
            })
            return newUsers;
        case RECEIVE_BOARD:
            //users.1.boardId[]
            let newUsersC = {};
            Object.keys(state).map( (curUserId) => { 
                let curList = state[curUserId].boardIds;
                let needAdding = curList.indexOf(action.payload.id) <= -1;
                if(needAdding){
                    curList = curList.concat([action.payload.id]);
                }

                newUsersC[curUserId] = {...state[curUserId], boardIds: curList}
            })
            return newUsersC;
        
        default: return state;
    }

}

export default usersReducer