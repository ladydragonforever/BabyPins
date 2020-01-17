import React from "react";
import PictureIndexItem from "./picture_index_item";
import Masonry from "./masonry";
import Loader from "react-loader-spinner";


class PictureIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {num_loaded: 0, num_total: 50};

        this.onImageLoaded = this.onImageLoaded.bind(this);
    
    }
    componentDidMount(){
        this.props.requestPictures();

    }

    onImageLoaded(){
        //https://www.javascriptstuff.com/detect-image-load/
        // https://www.javascriptstuff.com/react-image-gallery/
        this.setState({num_loaded: this.state.num_loaded+1});

    }

    render(){
        const {pictures} = this.props;

        let brakePoints = [350, 500, 750];

        let needDisplayLoading = this.state.num_loaded < this.state.num_total;
        const display = needDisplayLoading
            ? 
            <div className="container">
                <h3 className="loader-word">We are adding babies to your bassinet!</h3>
                <Loader
                    className="loader"
                    type="Audio"
                    color="#e60023"
                    height={50}
                    width={50}
                    timeout={50000} //3 secs

                /> 
                <div className="hidden-me" hidden>
                        {pictures.map(picture =>
                                    picture?
                                <img className="picture-img" src={picture.imageUrl} alt="" 
                                onLoad={this.onImageLoaded}
                            
                                onError={this.onImageLoaded}
                                key={picture.id}
                                /> : null
                        )}

                </div>
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