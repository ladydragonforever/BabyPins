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
        const {title, description, formType} = this.state;

        const text = formType === "Create your board" ? "Creat" : "Save"

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>{formType}</div>
                    <label>
                        <div>Name</div>
                        <input type="text" value={title} onChange={this.update("title")}/>
                    </label>
                     <label>
                        <div>description</div>
                    <textarea value={description} onChange={this.update("description")} />
                    </label>

                    <button>{text}</button>
                </form>
            </div>
        )

    }
}

export default BoardForm;