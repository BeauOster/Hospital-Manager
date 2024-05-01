import React from 'react';
import styles from '../Styles/global.module.css';
import AboutPage from '../pages/about';
import Home from '../pages/index';
import Link from 'next/link';

export default function NavBar(){
    return(
        <nav>
            <div className={styles.topNav}>
                <a href="/">Home</a>
                <a href="about">About</a>
                <Link href="register">Register</Link>
                <Link href="login">Log In</Link>
                <a href="createrecord">Create Record</a>
                <a href="patientrecords">Patient Records</a>
            </div>
            

        </nav>
    );
}