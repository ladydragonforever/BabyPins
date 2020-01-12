import {RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD} from "../actions/board";

const boardsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BOARDS:
            return action.payload;
        case RECEIVE_BOARD:
            return {...state, [action.payload.id]: action.payload};
        case REMOVE_BOARD:
            return {...state, [action.payload]: undefined};
        default: return state;
    }

}

export default boardsReducer;