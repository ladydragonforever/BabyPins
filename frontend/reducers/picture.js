import {RECEIVE_PICTURES, RECEIVE_PICTURE} from "../actions/picture";
import {FILTER_PICTURES} from "../actions/filter";

const picturesReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_PICTURES:
            return action.payload;
        case RECEIVE_PICTURE:
            // debugger;
            return Object.assign({}, state, {[action.payload.id]: action.payload});
        case FILTER_PICTURES:
            return action.payload;
        default: return state;      
    }
}

export default picturesReducer;