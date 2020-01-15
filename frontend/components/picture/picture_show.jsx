import React from "react";
import Select from "react-select";

class PictureShow extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this.props);
        this.props.requestPicture(this.props.match.params.pictureId)
        this.props.fetchBoards();
       
    }

    handleChange(selectedOption) {
        
        this.setState(  
            {selectedOption},
            () => console.log(`Option selected:`, this.state.selectedOption)
        )
    }

    // componentWillUpdate(prevProps){
    //     if (this.props.picture.id !== prevProps.picture.id) 
    //     this.props.requestPicture(this.props.poicture.id)
    // }
    //need to add a button for submit and callback addPin (this.props.addPin)
    // add the addPin action to dispatch in Picture show container
    // add the RECEIVE_PIN action to board reducer to modify the state

    handleSubmit(e){
        e.preventDefault(); 
        const { picture, addPin } = this.props;
        const { selectedOption } = this.state;
       
        addPin(selectedOption.value, picture.id);
        this.props.history.push("/profile");
    }

    render(){
        const {selectedOption} = this.state;
        if (!this.props.picture) return null;
        // console.log(this.props.boards, selectedOption);
        let hasBoards = this.props.boards !== undefined && this.props.boards.length !== 0;
        const options = !hasBoards ? [] :  this.props.boards.map((board) => ({value: board.id, label: board.title}))

        let select = null;
        if(hasBoards){
                select = <Select
                    options={options}
                    value={selectedOption}
                    onChange={this.handleChange}
                    placeholder="Select Board"
                />;
        } else {
                select = <Select
                    options={options}
                    placeholder="No board to add to."
                    isDisabled={true}
                />;
        }

       

        return(

            <div>
                <img src={this.props.picture.imageUrl} alt="" />

                <form onSubmit={this.handleSubmit}>
                {select}
                <button> Save</button>
                </form>
            </div>
           

        )
    }
}


export default PictureShow;