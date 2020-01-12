import React from "react";

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
            {display}
            <div>{title}</div>
            <div>{pinCount}</div>
            <Link to="">EditBoard</Link>
        </div>
    )
}

export default BoardIndexItem;