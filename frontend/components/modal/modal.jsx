import React from 'react';
import { closeModal } from '../../actions/modal';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" >
            <div className="modal-imgcontainer">
                {/* <img className="modal-img" src={window.imagesUrl.modal} alt="" /> */}
                {/* <img className="modal-img" src={window.imagesUrl.modal} alt="" /> */}
            </div>
          
            <div className="modal-child">
                {component}
            </div>
        </div>
    );
}

// const mapStateToProps = state => {
//     return {
//         modal: state.ui.modal
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         closeModal: () => dispatch(closeModal())
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);
export default Modal;