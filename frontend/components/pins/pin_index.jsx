import React from "react";
import Masonry from "../picture/masonry";


class PinIndex extends React.Component {

    // constructor(props){
    //     super(props)
    // this.handleDelete = this.handleDelete.bind(this);    
    // }


    // handleDelete() {
        
    // }

    
    render(){
        const{pins} = this.props;
        let brakePoints = [350, 500, 750];
        if (pins.length===0) return null
        let i =0;
        console.log(this.props)
        return(
            // <ul>
            //     {
            //         pins.map(picUrl => 
            //             <li key={i++}>
            //                 <img src={picUrl}  alt="" />
            //             </li>
            //             )
            //     }
            // </ul>
            <div className="pins-container" >
                <div className="masonry-container">
                    <Masonry brakePoints={brakePoints}>
                        {pins.map(pic =>
                        <li className="tile "key={i++}>
                            <img src={pic.url}  alt="" />
                         
                        </li>
                        )}
                    </Masonry>
                </div>
            </div >
        )
    }

}

export default PinIndex;