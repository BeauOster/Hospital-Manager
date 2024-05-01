import React from "react";
import LoginForm from "../components/LoginForm";
import regStyles from '../Styles/login.module.css';
import styles from '../Styles/global.module.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


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
        <body className={styles.font}>
            <Header />
            <NavBar />
            <div className={regStyles.formBody}>
                <div className={regStyles.loginContainer}>
                    <h1 className={regStyles.textCenter}>Login</h1>
                    <LoginForm schema={LoginFormSchema} />
                </div>
            </div>
            <Footer />
        </body>
    );
};

// Add an event listener to the login button
export default CreateLoginForm;
