import React from 'react';
import styles from '../Styles/global.module.css';
import details from '../Styles/patientDetails.module.css';

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
            <p>Birth Date: {patient.birth_date}</p>
            <p>Social Security Number: {patient.SSN}</p>
            {/* Add more patient details here if you need to guys :) */}
          </fieldset>
        </div>

        <br></br>

        <div className={details.infoBody}>
          <fieldset className={details.address}>
            <legend className={details.legendSize}>Address</legend>
            <p>State: {patient.state}</p>
            <p>City: {patient.city}</p>
            <p>Zip Code: {patient.zip_code}</p>
            <p>Phone Number: {patient.phone}</p>
          </fieldset>
        </div>

        <br></br>

        <div className={details.infoBody}>
          <fieldset className={details.medHistory}>
            <legend className={details.legendSize}>Medical History</legend>
          </fieldset>
        </div>

      </div>
    </body>
  );
};

export default PatientDetails;
