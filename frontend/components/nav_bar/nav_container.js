import { connect } from 'react-redux';

import { logout } from '../../actions/session';
// import { openModal } from '../../actions/modal';
import NavBar from './nav_bar.jsx';
import { filterPictures } from "../../actions/filter";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        // filterPictures: (selectedPics) => dispatch(filterPictures(selectedPics))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);

