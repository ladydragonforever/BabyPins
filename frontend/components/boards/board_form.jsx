import React from "react";

class BoardForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.action(this.state)
    }
    

    render(){
        const {title, description} = this.state;
        const {formType} = this.props;

        const text = formType === "Create your board" ? "Create" : "Save"
        console.log(formType);

        return(
            <div>
                <form className="board-form-container" onSubmit={this.handleSubmit}>
                    <div className="board-form-title">{formType}</div>
                    <div className="board-form-name">
                        <div className="board-form-column">Name</div>
                        <input className="board-name-content" type="text" value={title} onChange={this.update("title")}/>
                    </div>
                     <div className="board-form-description">
                        <div className="board-form-column">description</div>
                    <textarea className="board-des-content" value={description} onChange={this.update("description")} />
                    </div>
                    <div className="board-form-button">
                        <button className="board-form-button1">Cancel</button>
                        <button className="board-form-button2">{text}</button>
                    </div>

                   
                </form>
            </div>
        )

    }
}

export default BoardForm;