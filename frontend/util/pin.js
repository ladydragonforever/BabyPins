
export const addPin = (boardId, pictureId) => {

    return $.ajax ({
        method: "post",
        url: `/api/boards/${boardId}/pins`,
        data: {pins: {picture_id:pictureId}}
    })
}

export const deletePin = (boardId, id) => (
    $.ajax ({
        method: "delete",
        url: `/api/boards/${boardId}/pins/${id}`,
    })
)