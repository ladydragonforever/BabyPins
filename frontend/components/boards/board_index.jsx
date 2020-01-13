import React from "react";
import {Link} from "react-router-dom";
import CreateBoardContainer from "./create_board_container"
import BoardIndexItem from "./board_index_item";


class BoardIndex extends React.Component {
    
    componentDidMount(){
        this.props.fetchBoards()
    }
    
    render() {
        // const name = currentUser ? currentUser.email.split("@")[0].split(".")[0] : null
        const {boards} = this.props;
        if (Object.keys(boards).length===0) return null;
        // console.log(boards)
        return(
        <div>
            <Link to="/boards/new">Create Board</Link>

            <ul>
                {
                    boards.map (board => <BoardIndexItem
                                        key={board.id}
                                        title={board.title}
                                        board={board}
                                        pinCount={board.classifiedPicIds.length}
                                         />)
                }
            </ul>

        </div>
        )
    }
    
}

export default BoardIndex;
