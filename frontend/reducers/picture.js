import {RECEIVE_PICTURES, RECEIVE_PICTURE} from "../actions/picture";

const picturesReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_PICTURES:
            return action.payload;
        case RECEIVE_PICTURE:
            // debugger;
            return Object.assign({}, state, {[action.payload.id]: action.payload});
        default: return state;      
    }
}

export default picturesReducer;