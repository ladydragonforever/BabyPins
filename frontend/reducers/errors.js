import { combineReducers } from "redux";
import sessionErrorReducer from "./session_error";

const errorsReducer = combineReducers({
    sessionError: sessionErrorReducer
})

export default errorsReducer;