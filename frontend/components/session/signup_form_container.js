import { connect } from "react-redux";
import SessionForm from "./session_form";
// import React from "react";
import { signUp, clearErrors } from "../../actions/session";
import {withRouter} from "react-router-dom";
// import {openModal, closeModal} from "../../actions/modal"

const mSTP = (state) => ({
    errors: state.errors.sessionError || [],
    formType: "Sign up"
});


const mDTP = (dispatch) => ({
    signUp: (formUser) => dispatch(signUp(formUser)),
    clearErrors: () => dispatch(clearErrors()),
   
})

export default withRouter(connect(mSTP, mDTP)(SessionForm))