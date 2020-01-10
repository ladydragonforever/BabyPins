import React from "react";
import PictureIndexItem from "./picture_index_item";

class PictureIndex extends React.Component {
    
    componentDidMount(){
        this.props.requestPictures();
    }
    render(){
        const {pictures} = this.props;
        // console.log(pictures)
        return (
            <div>
                <ul>
                    {
                         pictures.map(picture =>
                                                <PictureIndexItem
                                                key={picture.id}
                                                picture={picture}
                                                />
                                    )
                    }

                </ul>
               
            </div>
        )
    }
}

export default PictureIndex;