import PinIndex from "./pin_index";
import { connect } from "react-redux";

const mSTP = state => {

    if (!state) return ({ pins: {} });

    const curUserId = state.session.id;

    if (curUserId === undefined) return ({ pins: {} });

    const curUser = state.entities.users[curUserId]

    if (curUser === undefined) return ({ pins: {} })

    const pins = curUser.pinnedPics || [] 
    console.log(curUser, curUser.pinnedPics)
    return ({ pins })

} 

export default connect(mSTP, undefined)(PinIndex);