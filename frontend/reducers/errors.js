import { combineReducers } from "redux";
import sessionErrorReducer from "./session_error";

const errorsReducer = combineReducers({
    session_error: sessionErrorReducer
})

export default errorsReducer;