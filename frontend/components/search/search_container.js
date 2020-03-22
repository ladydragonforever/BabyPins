import {connect} from "react-redux";
import {filterPictures} from "../../actions/filter";
import Search from "./search";
import {openModal} from "../../actions/modal"

const mSTP = state => {
    return ({
        filteredPics: state.entities.pictures
    })
}

const mDTP = dispatch => ({ 
    filterPictures: (searchKey) => dispatch(filterPictures(searchKey)),
    openModal: (dropdown)=> dispatch(openModal(dropdown))

})

export default connect(null, mDTP)(Search);