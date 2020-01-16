export const requestBoards = () => { 
    console.log("we are here");
    return $.ajax({
        method: "get",
        url: "/api/boards",
    });
}

export const requestBoard = (boardId) => (
    $.ajax({
        method: "get",
        url: `/api/boards/${boardId}`
    })
)

export const createBoard = (board) => (
    $.ajax({
        method: "post",
        url: "/api/boards",
        data: {board}
    })
)

export const updateBoard = (board) => (
    $.ajax({
        method: "put",
        url: `/api/boards/${board.id}`,
        data: {board}
    })
)

export const deleteBoard = (boardId) => (
    $.ajax({
        method: "delete",
        url: `/api/boards/${boardId}`
    })
)