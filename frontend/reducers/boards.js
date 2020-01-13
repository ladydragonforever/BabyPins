import {RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD} from "../actions/board";
import { RECEIVE_PIN } from "../actions/pin";

const boardsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BOARDS:
            return action.payload;
        case RECEIVE_BOARD:
            return {...state, [action.payload.id]: action.payload};
        case REMOVE_BOARD:
            return {...state, [action.payload]: undefined};
        case RECEIVE_PIN:
            let newState = {...state}
            let newPins = newState[action.payload.boardId].classifiedPictureIds.push(action.payload.pictureId)
            return { ...state, [newState[action.payload.boardId].classifiedPictureIds]: newPins}    
        default: return state;
    }

}

export default boardsReducer;