import React from "react";
import PictureIndexItem from "./picture_index_item";
import Masonry from "./masonry";
import Loader from "react-loader-spinner";


class PictureIndex extends React.Component {
    
    componentDidMount(){
        this.props.requestPictures();
    }
    render(){
        const {pictures} = this.props;
        let brakePoints = [350, 500, 750];

        const display = pictures.length === 0 
            ? 
            <div className="container">
                <h3 className="loader-word">We are adding pictures to your feed!</h3>
                <Loader
                    className="loader"
                    type="Audio"
                    color="#e60023"
                    height={50}
                    width={50}
                    timeout={3000} //3 secs

                /> 
            </div>
           
            : <div className="container" >
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
            <div>
                {display}
            </div>
          
        )
    }
}

export default PictureIndex;