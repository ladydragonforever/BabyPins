import * as PinUtil from "../util/pin";
import { requestUser } from "./user"

export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";

const receivePin = (payload) => ({
    type: "RECEIVE_PIN",
    payload
});


const removePin = (payload) => ({
    type: "REMOVE_PIN",
    payload
});

export const addPin = (boardId, pictureId) => dispatch => PinUtil.addPin(boardId, pictureId)
.then((res) => dispatch(receivePin(res)))
.then(() => dispatch(requestUser()));

export const deletePin = (boardId, pictureId) => dispatch => PinUtil.deletePin(boardId,pictureId)
    .then(() => dispatch(removePin({boardId, pictureId})))
    .then(() => dispatch(requestUser()));

