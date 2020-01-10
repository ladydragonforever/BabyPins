import PictureIndex from "./picture_index"
import {requestPictures} from "../../actions/picture"
import { connect } from "react-redux"

const mSTP = state => ({
    pictures: Object.values(state.entities.pictures)
})

const mDTP = dispatch => ({
    requestPictures: () => dispatch(requestPictures())
})

export default connect(mSTP, mDTP)(PictureIndex);