import React from 'react';
import { useRouter } from 'next/router';
import TEST_DATA from '../../components/TEST_DATA.json'
import PatientDetails from '../../components/PatientDetails';

const PatientPage = () => {
  const router = useRouter();
  console.log(router.query)
  const { id } = router.query;

  // Find the patient with the given ID
 // const patient = TEST_DATA.find((patient) => patient.id === id);
 const patient = TEST_DATA.find((patient) => patient.PatientID === parseInt(id, 10));

  return (
    <div>
      {patient ? (
        <PatientDetails patient={patient} />
      ) : (
        <p>Patient not found</p>
      )}
    </div>
  );
};

export default PatientPage;