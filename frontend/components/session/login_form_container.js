import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, clearErrors } from "../../actions/session";
import {withRouter} from "react-router-dom"
// import { openModal, closeModal } from "../../actions/modal"
// import React from "react";

const mSTP = (state) => ({
    errors: state.errors.sessionError || [],
    formType: "Log in"
});


const mDTP = (dispatch) => {
    // debugger;
    return ({ 
        login: (formUser) => dispatch(login(formUser)) ,
        clearErrors: () => dispatch(clearErrors())
    })

}

export default withRouter(connect(mSTP, mDTP)(SessionForm));