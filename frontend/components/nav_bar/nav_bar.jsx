import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {

//     const display = currentUser ? (
//         <div>
//             <h1>hello, {currentUser.username}! </h1>
//             <button onClick={logout}>Log Out</button>
//         </div>
//     ) : 
//     (
//         <div>
//             <Link to="/signup">Sign up</Link>
//             <Link to="/login">Log in</Link>
//         </div>
//     )}

// const personalGreeting = () => (
//     <hgroup className="header-group">
//         <button className="header-button" onClick={logout}>Log Out</button>
//     </hgroup>
        // const initial = currentUser.email[0]
    return(
        <div>
            hi
            <NavLink to="/">LogoPlaceHolder</NavLink>
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/Following">Following</NavLink> */}
            {/* <NavLink>{initial}</NavLink> */}
            <NavLink to="/" onClick={logout}>Logout</NavLink> 
            
        </div>
    );
};

export default NavBar;


