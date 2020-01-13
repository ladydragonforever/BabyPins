import React from "react";
import Select from "react-select";

class PictureShow extends React.Component{

 

    componentDidMount(){
        console.log(this.props);
        this.props.requestPicture(this.props.match.params.pictureId)
        this.props.fetchBoards();
    }

    // componentWillUpdate(prevProps){
    //     if (this.props.picture.id !== prevProps.picture.id) 
    //     this.props.requestPicture(this.props.poicture.id)
    // }
    //need to add a button for submit and callback addPin (this.props.addPin)
    // add the addPin action to dispatch in Picture show container
    // add the RECEIVE_PIN action to board reducer to modify the state

    render(){
        if (!this.props.picture) return null;
        console.log(this.props.boards);
        let hasBoards = this.props.boards !== undefined && this.props.boards.length !== 0;
        const options = !hasBoards ? [] :  this.props.boards.map((board) => ({value: board.id, label: board.title}))

        let select = null;
        if(hasBoards){
                select = <Select
                    options={options}
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
                {select}
            </div>
           

        )
    }
}


export default PictureShow;