
import { combineReducers } from "redux";
import usersReducer from "./users";
import picturesReducer from "./picture";
import boardsReducer from "./boards";

const entitiesReducer = combineReducers({
    users: usersReducer,
    pictures: picturesReducer,
    boards: boardsReducer
});

export default entitiesReducer;

