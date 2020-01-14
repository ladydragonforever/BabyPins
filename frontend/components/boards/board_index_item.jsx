import React from "react";
import {Link} from "react-router-dom";

const BoardIndexItem = ({title, pinCount, board}) => {
    
    let i=0;
    const display = board.fourPics 
     ? (
            <ul className="board-items-container">
                {
                    // board.fourPics.map(picUrl => <li key={Math.floor(Math.random() * 1000)}>
                    //     < img className="board-item-img" src={picUrl} alt="" />
                    //                       </li>)
                   board.fourPics.map(picUrl => 
                        < img className="board-item-img" src={picUrl} alt=""  key={i++}/>
                                          )
                }
            </ul>
     ) 
     : (null)
 
    return(
        <div className="board-items-main">
            <div >
                <Link to={`/boards/${board.id}`}>{display}</Link>
            </div>
            
            <div className="board-title">{title}</div>
            <div className="board-count">{pinCount}</div>
        </div>
    )
}

export default BoardIndexItem;