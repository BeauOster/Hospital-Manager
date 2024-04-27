import React from "react";
import SignUpForm from "../components/SignUpform";

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
        <div className="register-container">
            <h1 className="text-center">Register</h1>
            <SignUpForm schema={RegisterFormSchema} />
        </div>
    );
};

export default CreateRegisterForm;
