import React from 'react';
import { PatientTable } from '../components/PatientTable';
import styles from '../Styles/global.module.css';

const PatientRecordsPage = () => {
    return (
      <div className={styles.font}>
        <PatientTable className={styles.font} />
      </div>
    );
  };
  
  export default PatientRecordsPage;