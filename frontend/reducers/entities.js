
import { combineReducers } from "redux";
import usersReducer from "./users";
import picturesReducer from "./picture";

const entitiesReducer = combineReducers({
    users: usersReducer,
    pictures: picturesReducer,
});

export default entitiesReducer;

