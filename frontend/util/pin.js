
const addPin = (boardId, pictureId) => (
    $.ajax ({
        method: "post",
        url: `/api/boards/${boardId}/pins`,
        data: {pictureId}
    })
)

const deletePin = (boardId, id) => (
    $.ajax ({
        method: "delete",
        url: `/api/boards/${boardId}/pins/${id}`,
    })
)