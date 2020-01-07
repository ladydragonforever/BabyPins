import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session";
import { openModal, closeModal } from "../../actions/modal"
import React from "react";

const mSTP = (state) => ({
    errors: state.errors,
    formType: "Log in"
});


const mDTP = (dispatch) => {
    // debugger;
    return ({ 
        login: (formUser) => dispatch(login(formUser)) ,
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Log in
            </button>
        ),
        closeModal: () => dispatch(closeModal())})

}

export default connect(mSTP, mDTP)(SessionForm);