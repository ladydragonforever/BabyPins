import React from "react";
import {Link} from "react-router-dom";

const BoardIndexItem = ({title, pinCount, board}) => {
    
    let i=0;
    let display = board.fourPics 
    if (!display) return null;

    while (display.length < 4) {display.push({});}
     
     
    display = (<ul className="board-items-container">
                {
                    // board.fourPics.map(picUrl => <li key={Math.floor(Math.random() * 1000)}>
                    //     < img className="board-item-img" src={picUrl} alt="" />
                    //                       </li>)
                   board.fourPics.map(picUrl => 
                    {
                        // if (Object.keys(picUrl)===0) {
                        //     return <div className="img-placeholder"> </div>
                        // } else {
                            return < img className="board-item-img" src={picUrl} alt=""  key={i++}/>
                        // }
                    }                      )
                }
             </ul>)
    
    
 
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