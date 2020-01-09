import React from "react";
import { Link } from "react-router-dom";

   const Welcome = () => {
    
       return (
        <div className="modal-main" >
               <div className="modal-background-background">
                   <div className="modal-background">
                   </div>
               </div>

               <div className="modal-child">
                    <div className="welcome-main">
                        <img src={window.imagesUrl.logo} className="logo" />
                        <h3>Welcome to BabyPins</h3>
                        <h3 className="welcome-sub">All you need for your baby</h3> 

                        <div className="welcome-login-signup">
                            <Link to="/login">
                                <button className="welcome-login">

                                    <div className="welcome-login-text">
                                        Log in
                                    </div>
                                </button>
                            </Link>
                    
                            <Link to="/signup">
                                <button className="welcome-signup" >
                                    <div className="welcome-signup-text">
                                        
                                        Sign up
                                    </div>
                                </button>
                            </Link>

                        </div>
                    </div>
        
                </div>
        </div>
       );

}

export default Welcome;