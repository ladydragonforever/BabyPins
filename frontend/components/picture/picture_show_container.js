import PictureShow from "./picture_show";
import { connect } from "react-redux";
import {requestPicture} from "../../actions/picture";

const mSTP = (state, ownProps) => {
    // debugger;
    console.log(state);
    return {
    picture: state.entities.pictures[ownProps.match.params.pictureId]
}}

const mDTP = dispatch => ({
    requestPicture: (pictureId) => dispatch(requestPicture(pictureId))
})

export default connect(mSTP, mDTP)(PictureShow);