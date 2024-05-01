import React from 'react';
import styles from '../Styles/global.module.css';
import details from '../Styles/patientDetails.module.css';
// import Header from '../components/Header';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';

const PatientDetails = ({ patient }) => {
  // Render patient details
  
  return (
    <body>
      <div className={styles.font}>
        <h1 className={details.patientName}>{patient.First_Name} {patient.Last_Name}</h1>
        <div className={details.infoBody}>
          <fieldset className={details.personalInfo}>
            <legend className={details.legendSize}>Personal Information</legend>
            <p>Age: {patient.Age}</p>
            <p>Gender: {patient.Gender}</p>
            <p>Birth Date: {patient.DOB}</p>
          </fieldset>
        </div>

        <br></br>

        


      </div>
    </body>
  );
};

export default PatientDetails;
