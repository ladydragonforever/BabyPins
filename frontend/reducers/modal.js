import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal';
import { RECEIVE_BOARD } from '../actions/board';

const modalReducer= (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_BOARD:
            return { ...state, boardId: action.payload.id};    
        default:
            return state;
    }
}

export default modalReducer;
