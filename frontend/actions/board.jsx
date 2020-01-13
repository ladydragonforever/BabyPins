import * as BoardUtil from "../util/board"

export const RECEIVE_BOARDS = "RECEIVE_BOARDS"
export const RECEIVE_BOARD = "RECEIVE_BOARD"
export const REMOVE_BOARD = "REMOVE_BOARD"

const receiveBoards = (payload) => ({
    type: RECEIVE_BOARDS,
    payload
}) 

const receiveBoard = (payload) => ({
    type: RECEIVE_BOARD,
    payload
})

const removeBoard = (payload) => ({
    type: REMOVE_BOARD,
    payload
})

export const fetchBoards = () => dispatch => BoardUtil.requestBoards()
.then(res => dispatch(receiveBoards(res)))


export const fetchBoard = boardId => dispatch => BoardUtil.requestBoard(boardId)
.then(res => dispatch(receiveBoard(res)))

export const createBoard = board => dispatch => BoardUtil.createBoard(board)
.then(res => dispatch(receiveBoard(res)))

export const updateBoard = board => dispatch => BoardUtil.updateBoard(board)
.then(res => dispatch(receiveBoard(res)))

export const deleteBoard = boardId => dispatch => BoardUtil.deleteBoard(boardId)
.then(() => dispatch(removeBoard(boardId)))


window.fetchBoards = fetchBoards;
window.fetchBoard = fetchBoard;
window.createBoard = createBoard;
window.updateBoard = updateBoard;
window.deleteBoard = deleteBoard;