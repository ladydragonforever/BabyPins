import React from "react";
import {Link} from "react-router-dom";

const PictureIndexItem = ({picture}) => {
        // console.log(picture);
        // debugger;
        return(
                <li className="picture-container">
                        <Link to={`/pictures/${picture.id}`}>
                                <img className="picture-img" src={picture.imageUrl} alt="" />
                        </Link>
                </li>
       
        )
}

export default PictureIndexItem;