import React from "react";
import PictureIndexItem from "./picture_index_item";
import Masonry from "./masonry";

class PictureIndex extends React.Component {
    
    componentDidMount(){
        this.props.requestPictures();
    }
    render(){
        const {pictures} = this.props;
        let brakePoints = [350, 500, 750];
        // console.log(pictures)
        return (
            // <div className="picture-main">
                // {/* <ul className="picture-list"> */}
                    // {
                    //      pictures.map(picture =>
                    //                             <PictureIndexItem
                    //                             key={picture.id}
                    //                             picture={picture}
                    //                             />
                    //                 )
                    // }

                // </ul>
               
            // </div>
            <div className = "container" >
                <div className="masonry-container">
                    <Masonry brakePoints={brakePoints}>
                        {pictures.map(picture =>
                                                <PictureIndexItem
                                                key={picture.id}
                                                picture={picture}
                                                />
                                    )}
                    </Masonry>
                </div>
			</div >
        )
    }
}

export default PictureIndex;