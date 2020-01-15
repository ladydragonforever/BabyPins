import React from "react";
import { Redirect } from "react-router-dom";

class BoardForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
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
        this.props.action(this.state);
        
       
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

        const text = formType === "Create your board" ? "Create" : "Save"
        // console.log(formType);

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
                    <div className="board-form-button">
                        <button className="board-form-button1" type="button" onClick={this.reset}>Cancel</button>
                        <button className="board-form-button2" type="submit" onSubmit={this.handleSubmit}>{text}</button>
                    </div>

                   
                </form>
            </div>
        )

    }
}

export default BoardForm;