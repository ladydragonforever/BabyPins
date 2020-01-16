import React from 'react';
import { closeModal } from '../../actions/modal';
import {fetchBoard} from "../../actions/board";
import { connect } from 'react-redux';
import EditBoardContainer from '../boards/edit_board_container';
import CreateBoardContainer from '../boards/create_board_container';
import {withRouter} from "react-router-dom";

class Modal extends React.Component {
    
    //componentDidMount(){
        //console.log(this.props.boardId, "this is boardId in modal")
        //if (Object.keys(this.props.boardId).length===0) return null;
        //this.props.fetchBoard(this.props.boardId);
    //}
    render () {
    const { modal, boardId, closeModal} = this.props;
    if (!modal) {
        return null;
    };
    let component;
    switch (modal) {
        case 'Edit Board':
            component = this.props.children;
            break;
        case 'Create Board':
            component = this.props.children;
            break;
        default:
            return null;
    };
    // console.log(component);
    return (
        <div className="modal-board-background" onClick={closeModal}>
            <div className="modal-board-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )}
}

const mapStateToProps = state => {
    const boardId = state.ui.modal ? state.ui.modal.boardId : {}
    return {
        modal: state.ui.modal,
        boardId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId))

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));