// import React from "react";
// import SignUpForm from "../components/SignUpForm";

// const CreateRegisterForm = () => {
//     const RegisterFormSchema = [
//         {
//             name: "FullName",
//             label: "Full Name",
//             type: "text",
//             required: true,
//         },
//         {
//             name: "Email",
//             label: "Email",
//             type: "email",
//             required: true,
//         },
//         {
//             name: "Password",
//             label: "Password",
//             type: "password",
//             required: true,
//         },
//         {
//             name: "PasswordConfirm",
//             label: "PasswordConfirm",
//             type: "password",
//             required: true,
//         },
//     ];

//     return (
//         <div className="register-container">
//             <h1 className="text-center">Register</h1>
//             <SignUpForm schema={RegisterFormSchema} />
//         </div>
//     );
// };

// export default CreateRegisterForm;

import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/login.css";

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
} from "mdb-react-ui-kit";

function Register() {
    return (
        <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12">
                    <MDBCard
                        className="bg-white my-5 mx-auto"
                        style={{ borderRadius: "1rem", maxWidth: "500px" }}
                    >
                        <MDBCardBody className="p-5 w-100 d-flex flex-column">
                            <h2 className="fw-bold mb-2 text-center">
                                Register
                            </h2>
                            <p className="text-white-50 mb-3">
                                PLEASE ENTER CORRECT INFORMATION
                            </p>

                            <MDBInput
                                wrapperClass="mb-4 w-100"
                                label="Email address"
                                id="formControlLg"
                                type="email"
                                size="lg"
                            />
                            <MDBInput
                                wrapperClass="mb-4 w-100"
                                label="Password"
                                id="formControlLg"
                                type="password"
                                size="lg"
                            />
                            <MDBInput
                                wrapperClass="mb-4 w-100"
                                label="PasswordConfirmation"
                                id="formControlLg"
                                type="password"
                                size="lg"
                            />

                            <MDBCheckbox
                                name="flexCheck"
                                id="flexCheckDefault"
                                className="mb-4"
                                label="Male"
                            />
                            <MDBCheckbox
                                name="flexCheck"
                                id="flexCheckDefault"
                                className="mb-4"
                                label="Female"
                            />

                            <MDBBtn size="lg">Sign Up</MDBBtn>

                            <hr className="my-4" />

                            <MDBBtn
                                className="mb-2 w-100"
                                size="lg"
                                style={{ backgroundColor: "#dd4b39" }}
                            >
                                <MDBIcon fab icon="google" className="mx-2" />
                                Sign up with google
                            </MDBBtn>

                            <MDBBtn
                                className="mb-4 w-100"
                                size="lg"
                                style={{ backgroundColor: "#3b5998" }}
                            >
                                <MDBIcon
                                    fab
                                    icon="facebook-f"
                                    className="mx-2"
                                />
                                Sign up with facebook
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Register;
