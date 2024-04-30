import React from "react";
import SignUpForm from '../components/SignUpForm';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../Styles/global.module.css';

const CreateRegisterForm = () => {
    const RegisterFormSchema = [
        {
            name: "FullName",
            label: "Full Name",
            type: "text",
            required: true,
        },
        {
            name: "Email",
            label: "Email",
            type: "email",
            required: true,
        },
        {
            name: "Password",
            label: "Password",
            type: "password",
            required: true,
        },
        {
            name: "PasswordConfirm",
            label: "PasswordConfirm",
            type: "password",
            required: true,
        },
    ];

    return (
        <body className={styles.font}>
            <div className="register-container">
                <Header />
                <NavBar />
                <h1 className="text-center">Register</h1>
                <SignUpForm schema={RegisterFormSchema} />
                <Footer />
            </div>
        </body>
    );
};

export default CreateRegisterForm;
