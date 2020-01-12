import React from "react";
import {Link} from "react-router-dom";

class BoardShow extends React.Component {

    componentDidMount(){

        this.props.fetchBoard(this.props.match.params.boardId)
    }
    render(){
        const {board} = this.props
        if (!board) return null;

        const display = board && board.pictures
            ? (
                <ul>
                    {
                        board.pictures.map(picUrl => <li key={Math.floor(Math.random() * 1000)}>
                            <img src={picUrl} alt="" />
                        </li>)
                    }
                </ul>
            )
            : (null)

        return(
            <div>
                <Link to={`/boards/${board.id}/edit`}>EditBoard</Link>
                <h3>{board.title}</h3>
                 {display}

            </div>
        )
    }
}

export default BoardShow;