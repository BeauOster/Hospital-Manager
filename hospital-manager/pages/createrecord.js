import React from 'react';
import Form from '../components/Form';
import recStyles from '../Styles/recordStyle.module.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CreatePatientRecordForm = () => {

    const PatientRecordSchema = [
        { name: 'First_Name', label: 'First Name', type: 'text', required: true },
        { name: 'Last_Name', label: 'Last Name', type: 'text', required: true },
        { name: 'Age', label: 'Age', type: 'number', required: true },
        { name: 'Gender', label: 'Gender', type: 'text', required: true },
        { name: 'DOB', label: 'Date of Birth', type: 'date', required: true }
    ];

    //NOTE: Got rid of medical record form due to time ***
    
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
        <div className={recStyles.recordMain}>
            <Header />
            <NavBar />
            <h1>Create Patient Record</h1>

            <div className={recStyles.patRecord}>
                
                    <fieldset className={recStyles.fieldBox}>
                        <legend className={recStyles.legendBox}>Enter Personal Information</legend>
                        <Form schema={PatientRecordSchema} onSubmit={handlePatientRecordSubmit} />
                    </fieldset>
            
            </div>
            {/*NOTE: Got rid of medical record form due to time */}
            <Footer />
        </div>
    );
};

export default CreatePatientRecordForm;
