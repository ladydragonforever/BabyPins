import { RECEIVE_CURRENT_USER } from "../actions/session";
import { REMOVE_BOARD } from "../actions/board";

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
            
        default: return state;
    }

}

export default usersReducer