import React from 'react';
import styles from '../Styles/global.module.css';

export default function Footer(){
    return(
        <footer className={styles.footerStyle}>
            <ul>
                <p>Contact Us via Email: RestAssuredTech@gmail.com</p>
                <p>Need immediate support? Call 715-683-9887</p>
            </ul>
        </footer>
    );
}