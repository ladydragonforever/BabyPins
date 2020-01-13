import Profile from "./profile";
import { connect } from "react-redux";


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    formType: "Boards"
})

export default connect(mSTP, undefined)(Profile);