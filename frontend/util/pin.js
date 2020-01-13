
export const addPin = (boardId, pictureId) => {
    console.log(pictureId); 
    return $.ajax ({
        method: "post",
        url: `/api/boards/${boardId}/pins`,
        data: {picture_id: pictureId}
    }).then(res => console.log(res))
}

export const deletePin = (boardId, id) => (
    $.ajax ({
        method: "delete",
        url: `/api/boards/${boardId}/pins/${id}`,
    })
)