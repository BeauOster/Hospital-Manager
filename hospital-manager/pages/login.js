import React from "react";
import LoginForm from "../components/LoginForm";
import "../Styles/login.css";

const CreateLoginForm = () => {
    const LoginFormSchema = [
        {
            name: "Username",
            label: "Username",
            type: "text",
            required: true,
        },
        {
            name: "Password",
            label: "Password",
            type: "password",
            required: true,
        },
    ];

    // Back end stuff here later
    const handlePatientRecordSubmit = (formInput) => {
        // Send formData to backend server for processing
        console.log("Patient record form data:", formInput);
    };

    return (
        <div className="login-container">
            <h1 className="text-center">Login</h1>
            <LoginForm schema={LoginFormSchema} />
        </div>
    );
};

// Add an event listener to the login button
export default CreateLoginForm;
