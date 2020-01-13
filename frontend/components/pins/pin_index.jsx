import React from "react";


class PinIndex extends React.Component {

    render(){
        const{pins} = this.props;
        if (pins.length===0) return null
            let i =0;
        return(
            <ul>
                {
                    pins.map(picUrl => 
                        <li key={i++}>
                            <img src={picUrl}  alt="" />
                        </li>
                        )
                }
            </ul>
        )
    }

}

export default PinIndex;