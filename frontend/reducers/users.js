import { RECEIVE_CURRENT_USER } from "../actions/session";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [action.payload.id]: action.payload });
        default: return state;
    }

}

export default usersReducer