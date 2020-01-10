import React from "react";

class PictureShow extends React.Component{

    // constructor(props){
    //     super(props);
    //     // debugger;
    //     this.state = this.props.picture;
    // }

    componentDidMount(){
        console.log(this.props);
        this.props.requestPicture(this.props.match.params.pictureId)
    }

    // componentWillUpdate(prevProps){
    //     if (this.props.picture.id !== prevProps.picture.id) 
    //     this.props.requestPicture(this.props.poicture.id)
    // }
    
    render(){
            console.log(this.props.picture);
            // debugger
        if (!this.props.picture) return null;
        // debugger;        
        return(
            // <div>
            //     hi
            // </div>
            <img src={this.props.picture.imageUrl} alt=""/>
        )
    }
}


export default PictureShow;