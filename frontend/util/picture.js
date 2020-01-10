export const fetchPictures =() => (
    $.ajax({
        method: "Get",
        url: "api/pictures"
    })
);

export const fetchPicture = (pictureId) => (
    $.ajax({
        method: "Get",
        url: `api/pictures/${pictureId}`
    })
)