import {connect} from "react-redux";
import {filterPictures} from "../../actions/filter";
import Search from "./search";

// const mSTP = state => {
//     return ({
//         filteredPics: state.entities.pictures
//     })
// }

const mDTP = dispatch => ({ 
    filterPictures: (searchKey) => dispatch(filterPictures(searchKey))

})

export default connect(null, mDTP)(Search);