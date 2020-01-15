import React from 'react';
import { closeModal } from '../../actions/modal';
import { connect } from 'react-redux';
import EditBoardContainer from '../boards/edit_board_container';
import CreateBoardContainer from '../boards/create_board_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'Edit Board':   
            component = <EditBoardContainer />;
            break;
        case 'Create Board':
            component = <CreateBoardContainer />;
            break;
        default:
            return null;
    }
    console.log(component);
    return (
        <div className="modal-board-background" onClick={closeModal}>
            <div className="modal-board-child" onClick={e => e.stopPropagation()}>
                
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);