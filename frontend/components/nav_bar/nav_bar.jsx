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
   
        const initial = currentUser ? currentUser.email[0] : null
        const name = currentUser? currentUser.email.split("@")[0].split(".")[0] : null

    return(
        // To change the routes for Following and initial
        <div className="nav-main">
            
            <NavLink className="nav-logo-link" to="/">
                    <img className="nav-logo"src={window.imagesUrl.logo}/>
            </NavLink>

            <input type="search" className="nav-search"/>

            <div className="nav-section">
                <div className="nav-home">
                    <NavLink activeClassName="nav-active" to="/">
                            Home
                    </NavLink>
                </div>
               
                <NavLink className="nav-follow" activeClassName="nav-active" to="/">
                    <div >
                        Following
                    </div>
                </NavLink>
                <NavLink className="nav-profile" activeClassName="nav-active" to="/">
                    <div>
                        <span className="nav-initial">{initial}</span>
                        <span className="nav-name">{name}</span>
                    </div>
                </NavLink>

                <NavLink className="nav-logout" activeClassName="nav-active" to="/" onClick={logout}>Logout</NavLink>
            </div>
           
        </div>
    );
};

export default NavBar;

