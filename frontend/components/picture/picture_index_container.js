import PictureIndex from "./picture_index";
import {requestPictures} from "../../actions/picture";
import { connect } from "react-redux";


const mSTP = state => {
    let pictures = Object.values(state.ui.filter).length === 0 
                    ? Object.values(state.entities.pictures) 
                    : Object.values(state.ui.filter)
    return{ pictures};
}

const mDTP = dispatch => ({
    requestPictures: () => dispatch(requestPictures()),


})

export default connect(mSTP, mDTP)(PictureIndex);