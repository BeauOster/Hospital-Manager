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

function Login() {
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
                                Sign in
                            </h2>
                            <p className="text-white-50 mb-3">
                                Please enter your login and password!
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

                            <MDBCheckbox
                                name="flexCheck"
                                id="flexCheckDefault"
                                className="mb-4"
                                label="Remember password"
                            />

                            <MDBBtn size="lg">Login</MDBBtn>

                            <hr className="my-4" />

                            <MDBBtn
                                className="mb-2 w-100"
                                size="lg"
                                style={{ backgroundColor: "#dd4b39" }}
                            >
                                <MDBIcon fab icon="google" className="mx-2" />
                                Sign in with google
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
                                Sign in with facebook
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Login;
