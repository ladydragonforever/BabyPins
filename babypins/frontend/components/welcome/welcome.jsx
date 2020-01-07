import React from "react";
// import { Link } from "react-router-dom";

// const Welcome = ({ currentUser, logout }) => {

    // const display = currentUser ? (
    //     <div>
    //         <h1>hello, {currentUser.username}! </h1>
    //         <button onClick={logout}>Log Out</button>
    //     </div>
    // ) : 
        // (
        //     <div>
        //         <Link to="/signup">Sign up</Link>
        //         <Link to="/login">Log in</Link>
        //     </div>

        // )
   const Welcome = ({currentUser, logout, openModal}) => {
    console.log(openModal);
       const sessionLinks = () => (
           <nav className="login-signup">
               <button onClick={() => openModal('login')}>Login</button>
               &nbsp;or&nbsp;
               <button onClick={() => openModal('signup')}>Signup</button>
           </nav>
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