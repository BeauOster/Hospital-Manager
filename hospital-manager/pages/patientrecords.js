import React from 'react';
import { PatientTable } from '../components/PatientTable';
import styles from '../Styles/global.module.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const PatientRecordsPage = () => {
    return (
      <div className={styles.font}>
        <Header />
        <NavBar />
        <PatientTable className={styles.font} />
        <Footer />
      </div>
    );
  };
  
  export default PatientRecordsPage;