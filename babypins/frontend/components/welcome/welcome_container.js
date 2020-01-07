import { connect } from 'react-redux';

import { logout } from '../../actions/session';
import { openModal } from '../../actions/modal';
import Welcome from './welcome';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
    console.log(openModal);
    return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
}};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome);