// import {fetchPictures} from "../util/picture";
export const FILTER_PICTURES = 'FILTER_PICTURES'

export const receiveFilteredPictures = payload => ({
    type: FILTER_PICTURES,
    payload    
})


export const filterPictures = (searchKey) => (dispatch, getState) => {
    let pictures = getState().entities.pictures;
    let filteredPictures = Object.values(pictures).filter((pic) => pic.title.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()));
    console.log("pictures", filteredPictures)
    console.log("searchKey", searchKey)
    return dispatch(receiveFilteredPictures(filteredPictures));
}

window.filterPictures = filterPictures;