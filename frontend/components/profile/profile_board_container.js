import Profile from "./profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openModal, closeModal } from '../../actions/modal';
import React from "react";

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    formType: "Boards",
    
    openModal: (modal)=> dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, undefined)(Profile));