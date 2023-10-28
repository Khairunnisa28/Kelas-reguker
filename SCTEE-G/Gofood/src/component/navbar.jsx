import React from "react";
import Foto from "../image/Logo.png"
import './navbar.css'
function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <img src={Foto}/>
            </div>
            <ul className="nax-list">
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/">Recommendation</a>
                </li>
                <li className="nav-item">
                    <a href="/">Cart</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;