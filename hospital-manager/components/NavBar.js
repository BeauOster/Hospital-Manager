import React from 'react';
import styles from '../Styles/global.module.css';
import AboutPage from '../pages/about';
import Home from '../pages/index';

export default function NavBar(){
    return(
        <nav>
            <div className={styles.topNav}>
                <a href="/">Home</a>
                <a href="about">About</a>
                <a href="register">Register</a>
                <a href="login">Log In</a>
                <a href="createrecord">Create Record</a>
                <a href="patientrecords">Patient Records</a>
            </div>
            

        </nav>
    );
}