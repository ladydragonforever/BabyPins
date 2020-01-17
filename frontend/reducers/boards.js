import {RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD} from "../actions/board";
import { RECEIVE_PIN, REMOVE_PIN } from "../actions/pin";

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
            let newState = {...state};
            let board = newState[action.payload.boardId];
            if (!board) return state;
            let newPins = board.classifiedPicIds.concat([action.payload.pictureId]);
            let newBoard = {...board, classifiedPicIds: newPins};
            return { ...state, [action.payload.boardId]: newBoard};    
        case REMOVE_PIN:
            let newState1 = { ...state };

            let board1 = newState1[action.payload.boardId];
            if (!board1) return state;
            let newPins1 = board1.classifiedPicIds.filter (el => el != action.payload.pictureId);
            let newPictures1 = board1.pictures.filter (el => el.id != action.payload.pictureId);
            
            let newBoard1 = {...board1, classifiedPicIds: newPins1, pictures: newPictures1};
            return { ...state, [action.payload.boardId]: newBoard1};

        default: return state;
    }

}

export default boardsReducer;