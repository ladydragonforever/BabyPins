import React from "react";
import { Link } from "react-router-dom";

// const Welcome = ({ currentUser, logout }) => {

    // const display = currentUser ? (
    //     <div>
    //         {/* <h1>hello, {currentUser.username}! </h1> */}
    //         <button onClick={logout}>Log Out</button>
    //     </div>
    // ) : 
    //     (
    //         <div>
    //             <Link to="/signup">Sign up</Link>
    //             <Link to="/login">Log in</Link>
    //         </div>

    //     )
   const Welcome = ({currentUser, logout, openModal}) => {
    
       const sessionLinks = () => (
        <div className="modal-main" >
               <div className="modal-background-background">
                   <div className="modal-background">
                   </div>
               </div>

               <div className="modal-child">
                    <div className="welcome-main">
                        <h3>Welcome to BabyPins</h3>
                        <h3 className="welcome-sub">All you need for your baby</h3> 

                        <div className="welcome-login-signup">
                            <Link to="/login">
                                <button className="welcome-login" onClick={() => openModal('login')}>

                                    <div className="welcome-login-text">
                                    Login
                                    </div>
                                </button></Link>
                    
                            <Link to="/signup">
                                <button className="welcome-signup" onClick={() => openModal('signup')}>
                                    <div className="welcome-signup-text">
                                    Signup
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
        
                </div>
        </div>
       );
       const personalGreeting = () => (
           <hgroup className="header-group">
               {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
               <button className="header-button" onClick={logout}>Log Out</button>
           </hgroup>
       );

       return (
           currentUser ?
               personalGreeting(currentUser, logout) :
               sessionLinks()
       );
}

export default Welcome;