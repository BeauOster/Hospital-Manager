import React from 'react';
import '../Styles/global.css';

export default function NavBar(){
    return(
        <nav>
            <div className="topNav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#signup">Sign Up</a>
                <a href="#log in">Log In</a>
            </div>
        </nav>
    );
}