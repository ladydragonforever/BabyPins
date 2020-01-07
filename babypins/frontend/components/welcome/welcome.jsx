import React from "react";
import { Link } from "react-router-dom";

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
   const Welcome = () => {
        return (
        <div>
            <h1>Welcome to Baby Pins !</h1>
            <p>Find all the sweet ressources for your baby!</p>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
        </div>
    )
}

export default Welcome;