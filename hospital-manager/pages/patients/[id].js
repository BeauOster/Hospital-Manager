import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
//import TEST_DATA from '../../components/TEST_DATA.json'
import PatientDetails from '../../components/PatientDetails';
import Form from '../../components/Form';

const PatientPage = () => {

  const PatientRecordSchema = [
    { name: 'First_Name', label: 'First Name', type: 'text', required: true },
    { name: 'Last_Name', label: 'Last Name', type: 'text', required: true },
    { name: 'Age', label: 'Age', type: 'number', required: true },
    { name: 'Gender', label: 'Gender', type: 'text', required: true }
];

  const router = useRouter();
  console.log(router.query)
  const { id } = router.query;
  const [patient, setPatient] = useState(null);

  // All of this is backend stuff. This fetches the patient record based on ID.
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

  // This is more backend stuff, handles updating a record.
  const handlePatientUpdate = async (formInput) => {

    try {
      
      const response = await fetch(`http://localhost:5000/update_patient_record/${router.query.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInput),
      });

      if (!response.ok) {
        throw new Error('Failed to update patient record');
      }

      const data = await response.json();
      console.log(data.message); // Handles error/success message

      //Update the patient state with the updated data (no need to refresh)
      setPatient(formInput);

    } catch (error) {
        console.error('Error:', error);
    }

  };

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

      <h1>Update Patient Record</h1>
      <Form schema={PatientRecordSchema} onSubmit={handlePatientUpdate} />

    </div>
    
  );
};

export default PatientPage;