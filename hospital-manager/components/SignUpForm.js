// SignUpForm.js
import React, { useState } from "react";

const SignUpForm = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to your backend API (not implemented here)
        console.log("Form data submitted:", formData);
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="passwordConfirm"
                    placeholder="PasswordConfirm"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default SignUpForm;
