import React from "react";
import { Redirect } from "react-router-dom";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

class BoardForm extends React.Component {
    constructor(props){
        super(props);
        console.log("BoardFrom props", this.props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    update(type){
        return(
            e => {
                this.setState({
                [type]: e.currentTarget.value})
            }
        )
    }
    
    handleSubmit(e){
        e.preventDefault();
        console.log("testing my submit")
        this.props.action(this.state)
            .then(this.props.closeModal)
            .then(()=>this.props.history.push("/profile/boards"))
            .then(()=>this.props.history.push("/profile"));
        
        /*.then(
            ()=> this.history.push("/profile")
        );*/
    }

    handleDelete(e){
        e.preventDefault();
        console.log(this.props.history);
        this.props.deleteBoard(this.props.board.id)
            .then(this.props.closeModal)
            .then(()=>this.props.history.push("/profile/boards"));

        
        /*.then(
            () => this.props.history.push("/profile")
        );
        */
    }

    // componentDidUpdate() {
    //     this.props.closeModal();
    //     this.props.history.push("/profile/boards")
    // }

    reset() {
        // console.log("test");
        this.setState(this.baseState);
        this.props.closeModal();
    }
    

    render(){
        const {title, description} = this.state;
        const {formType} = this.props;

        const text = formType === "Create your board" ? "Create" : "Save" ;
        const deleteButton = formType === "Edit your board"
            ?
            <button className="board-delete-button" 
                onClick={this.handleDelete} >
                Delete
            </button>
            : null

        

        return(
            <div>
                <form className="board-form-container" >
                    <div className="board-form-title">{formType}</div>
                    <div className="board-form-name">
                        <div className="board-form-column1">Name</div>
                        <input className="board-name-content" type="text" value={title} onChange={this.update("title")}/>
                    </div>
                     <div className="board-form-description">
                        <div className="board-form-column2">Description</div>
                        <input className="board-des-content" value={description} onChange={this.update("description")} />
                    </div>
                    <div >
                        {deleteButton}
                        <div className="board-form-button">
                            <button className="board-form-button1" type="button" onClick={this.reset}>Cancel</button>
                            <button className="board-form-button2" onClick={this.handleSubmit}>{text}</button>
                        </div>
                        
                        
                    </div>

                   
                </form>
            </div>
        )

    }
}

export default BoardForm;