import { connect } from 'react-redux';

import { logout } from '../../actions/session';
// import { openModal } from '../../actions/modal';
import NavBar from './nav_bar.jsx';

const mapStateToProps = ({ session }) => ({
    currentUser: session.id
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);

