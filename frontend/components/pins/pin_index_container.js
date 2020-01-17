import PinIndex from "./pin_index";
import { connect} from "react-redux";
import {withRouter} from "react-router-dom";

const mSTP = state => {

    if (!state) return ({ pins: {} });

    const curUserId = state.session.id;

    if (curUserId === undefined) return ({ pins: {} });

    const curUser = state.entities.users[curUserId]

    if (curUser === undefined) return ({ pins: {} })

    const pins = curUser.pinnedPics || [] 
    // console.log(curUser, curUser.pinnedPics)
    return ({ pins })

} 

export default withRouter(connect(mSTP, undefined)(PinIndex));