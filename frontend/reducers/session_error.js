import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session";

const sessionErrorReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.payload
        default: return state;
    }
}

export default sessionErrorReducer;