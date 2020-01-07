import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session";

const mSTP = (state) => ({
    errors: state.errors,
    formType: "Log in"
});


const mDTP = (dispatch) => {
    // debugger;
    return ({ login: (formUser) => dispatch(login(formUser)) })

}

export default connect(mSTP, mDTP)(SessionForm);