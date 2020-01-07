import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signUp } from "../../actions/session";

const mSTP = (state) => ({
    errors: state.errors,
    formType: "Sign up"
});


const mDTP = (dispatch) => ({
    signUp: (formUser) => dispatch(signUp(formUser)),
})

export default connect(mSTP, mDTP)(SessionForm)