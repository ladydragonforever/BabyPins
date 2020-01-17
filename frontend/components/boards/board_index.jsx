import React from "react";
import {Link} from "react-router-dom";
import CreateBoardContainer from "./create_board_container"
import BoardIndexItem from "./board_index_item";
import Masonry from "../picture/masonry";


class BoardIndex extends React.Component {
    
    componentDidMount(){
        this.props.fetchBoards()
    }
    
    render() {
        // const name = currentUser ? currentUser.email.split("@")[0].split(".")[0] : null
        const {boards} = this.props;
        let brakePoints = [350, 500, 750]
        if (Object.keys(boards).length===0) return null;
        // console.log(boards)
        return(
        <div className="board-container">
            {/* <Link to="/boards/new">Create Board</Link> */}

            <div className="board-item">
                {  
                    boards.map (board => board ? <BoardIndexItem

                                        key={board.id}
                                        title={board.title}
                                        board={board}
                                        pinCount={board.classifiedPicIds.length}
                                         /> : null)
                }
            </div>

        </div>
            // <div className="container" >
            //     <div className="masonry-container">
            //         <Masonry brakePoints={brakePoints}>
            //             {
            //                 boards.map (board => <BoardIndexItem
            //                                 key={board.id}
            //                                 title={board.title}
            //                                 board={board}
            //                                 pinCount={board.classifiedPicIds.length}
            //                                 />)
            //             }   
                        
            //         </Masonry>
            //     </div>
            // </div >
        )
    }
    
}

export default BoardIndex;
