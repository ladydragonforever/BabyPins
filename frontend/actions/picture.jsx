import {fetchPictures, fetchPicture} from "../util/picture"

export const RECEIVE_PICTURES = "RECEIVE_PICTURES";
export const RECEIVE_PICTURE = "RECEIVE_PICTURE";

const receivePictures = (payload) => ({
    type: RECEIVE_PICTURES,
    payload
})

const receivePicture = (payload) => ({
    type: RECEIVE_PICTURE,
    payload
})


export const requestPictures = () => dispactch => fetchPictures()
.then(res => dispactch(receivePictures(res)));

export const requestPicture = (pictureId) => dispactch => fetchPicture(pictureId)
.then((res) => dispactch(receivePicture(res)))

window.requestPictures = requestPictures;
window.requestPicture = requestPicture;

