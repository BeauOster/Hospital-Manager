import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
//import TEST_DATA from '../../components/TEST_DATA.json'
import PatientDetails from '../../components/PatientDetails';

const PatientPage = () => {
  const router = useRouter();
  console.log(router.query)
  const { id } = router.query;
  const [patient, setPatient] = useState(null);

  useEffect(() => {

    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://localhost:5000/get_patient_record/${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch patient, I guess they got discharged?')
        }

        const data = await response.json();
        const patientData ={
          PatientID: data[0],
          First_Name: data[1],
          Last_Name: data[2],
          Age: data[3],
          Gender: data[4]
        };


        if (Object.keys(data).length === 0) {
          throw new Error('Oopsie woopsies we cant find that patient');
        }

        setPatient(patientData); //Because we are only fetching a single patient
        console.log('Data fetched successfully:', data);
  

      } catch (error) {
        console.error('Error fetching patient:', error);
      }
    }; // end fetchPatient

    if (id) {
      fetchPatient();
    }

  }, [id]);

// ALL OF THIS IS OLD CODE / MOCK DATA
// Find the patient with the given ID
// const patient = TEST_DATA.find((patient) => patient.id === id);
// const patient = TEST_DATA.find((patient) => patient.PatientID === parseInt(id, 10));

  return (
    <div>
      {patient ? (
        <>
              {console.log('Patient information:', patient)}
              <PatientDetails patient={patient} />
        </>
      ) : (
        <p>Patient not found</p>
      )}
    </div>
  );
};

export default PatientPage;