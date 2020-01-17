
import {fetchUser} from "../util/user";

export const UPDATE_USER = "UPDATE_USER";

const userUpdate = (payload) => ({
    type: UPDATE_USER,
    payload
});


export const requestUser = () => (dispatch, getState) => {
    let userId = getState().session.id; 
    return fetchUser(userId).then((res) => dispatch(userUpdate(res)))
};
