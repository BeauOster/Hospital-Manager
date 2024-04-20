import React from 'react';
import Form from '../components/Form';

const CreatePatientRecordForm = () => {

    const PatientRecordSchema = [
        { name: 'First_Name', label: 'First Name', type: 'text', required: true },
        { name: 'Last_Name', label: 'Last Name', type: 'text', required: true },
        { name: 'Age', label: 'Age', type: 'number', required: true },
        { name: 'Gender', label: 'Gender', type: 'text', required: true }
    ];

    const MedicalRecordFormSchema = [
        { name: 'RecordID', label: 'Record ID', type: 'number', required: true },
        { name: 'Medical_History', label: 'Medical History', type: 'text', required: true },
        { name: 'Diagnosis', label: 'Diagnosis', type: 'text', required: true },
        { name: 'PatientID', label: 'Patient ID', type: 'number', required: true },
        { name: 'UserID', label: 'User ID', type: 'number', required: true }
      ];

    // Back end stuff here later
    const handlePatientRecordSubmit = (formInput) => {
        fetch('http://localhost:5000/create_patient_record', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formInput)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // Handles error/success message
        })
        .catch(error => {
            console.error('Error:', error); //handles error
        });
        // Send formData to backend server for processing
        console.log('Patient record form data:', formInput);
    };

    const handleMedicalRecordFormSubmit = (data) => {
        // Handle submission for record form
        console.log('Record form data:', data);
    };

    return (
        <div>
            <h1>Create Patient Record</h1>
            <Form schema={PatientRecordSchema} onSubmit={handlePatientRecordSubmit} />
            <h1>Create Patient Medical Record </h1>
            <Form schema={MedicalRecordFormSchema} onSubmit={handleMedicalRecordFormSubmit} />
        </div>
    );
};

export default CreatePatientRecordForm;
