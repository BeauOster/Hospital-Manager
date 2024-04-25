import React from 'react';
import styles from '../Styles/global.module.css';

export default function Header() {
    return (
        <header>
            <h1 className={styles.pageHeader}>Rest Assured Hospital Management</h1>
            <p className={styles.pageQuote}>For Healthier Living</p>
        </header>
    );
}