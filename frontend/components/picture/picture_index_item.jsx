import React from "react";
import {Link} from "react-router-dom";

const PictureIndexItem = ({picture}) => {
        // console.log(picture);
        return(
        // <Link to={`/pictures/${picture.id}`}>{picture}</Link>)
       <img src={picture.imageUrl} alt=""/>
        )

}


export default PictureIndexItem;