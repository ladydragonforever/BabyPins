import React from "react";
// import {Link} from "react-router-dom";
// import BoardNewContainer from "./board_new_container"
import BoardIndexItem from "./board_index_item";


class BoardIndex extends React.Component {
    
    componentDidMount(){
        this.props.fetchBoards()
    }
    
    render() {
        // const name = currentUser ? currentUser.email.split("@")[0].split(".")[0] : null
        const {boards} = this.props;
        // console.log(boards)
        return(
        <div>
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
