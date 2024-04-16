import React from 'react';

const PatientDetails = ({ patient }) => {
  // Render patient details
  return (
    <div>
      <h1>{patient.First_Name} {patient.Last_Name}</h1>
      <p>Age: {patient.Age}</p>
      <p>Gender: {patient.Gender}</p>
      {/* Add more patient details here if you need to guys :) */}
    </div>
  );
};

export default PatientDetails;
