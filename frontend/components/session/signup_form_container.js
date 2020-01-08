import { connect } from "react-redux";
import SessionForm from "./session_form";
// import React from "react";
import { signUp } from "../../actions/session";
// import {openModal, closeModal} from "../../actions/modal"

const mSTP = (state) => ({
    errors: state.errors.sessionError || [],
    formType: "Sign up"
});


const mDTP = (dispatch) => ({
    signUp: (formUser) => dispatch(signUp(formUser)),
    // otherForm: (
    //     <button onClick={() => dispatch(openModal('singup'))}>
    //         Sign Up
    //     </button>
    // ),
    // closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm)