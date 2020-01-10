import {RECEIVE_PICTURES, RECEIVE_PICTURE} from "../actions/picture";

const picturesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PICTURES:
            return action.payload;
        case RECEIVE_PICTURE:
            return {...state, [action.payload.id]: action.payload};
        default: state;      
    }
}

export default picturesReducer;