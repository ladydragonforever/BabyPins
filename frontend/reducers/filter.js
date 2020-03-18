import {FILTER_PICTURES} from "../actions/filter";

const filterReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case FILTER_PICTURES:
            return action.payload;
        default:
            return state;    
    }
}

export default filterReducer;