import React from "react";
import {Link} from "react-router-dom";

const BoardIndexItem = ({title, pinCount, board}) => {
    const display = board.fourPics 
     ? (
            <ul>
                {
                    board.fourPics.map(picUrl => <li key={Math.floor(Math.random() * 1000)}>
                        <img src={picUrl} alt="" />
                                          </li>)
                }
            </ul>
     ) 
     : (null)
 
    return(
        <div>
            <Link to={`/boards/${board.id}`}>{display}</Link>
            <div>{title}</div>
            <div>{pinCount}</div>
        </div>
    )
}

export default BoardIndexItem;