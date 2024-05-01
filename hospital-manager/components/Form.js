// Below is considered a "hook" in react js.
// Hooks allow function components to have access to state and other React features.

import React, { useState } from 'react';


// UseState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.
// State generally refers to data or properties that need to be tracked in an application.
// Form accepts two props: schema (representing the form schema) and onSubmit (a function to handle form submission).
// => represents an arrow function, if you have a hard time wrapping your head around this
// "const form" is technically a function.
const Form = ({ schema, onSubmit }) => {

    // formInput will store the current state of the form data, 
    // and setFormInput is a function used to update the form input state.
    // The initial value of formInput is an empty object {}.
    const [formInput, setFormInput] = useState({});

    // This line defines a function named handleChange using arrow function syntax. 
    // This function is responsible for updating the form data whenever there is a change in any input field.
    const handleChange = (event) => {
        setFormInput({
            // '...' Is a spread operator to copy the existing formInput object.
            ...formInput,
            // updates the value of the field that triggered the change event
            // (event.target.name) with the new value entered by the user (event.target.value).
            [event.target.name]: event.target.value
        });
    };
    
    // Defines a function named handleSubmit using arrow function syntax. 
    // This function is called when the form is submitted.
    const handleSubmit = (event) => {
        event.preventDefault();
        // This line calls the onSubmit callback function provided as a prop,
        // passing the current formInput as an argument.
        onSubmit(formInput);
    };
    
    return (
        // When the form is submitted handleSubmit function is triggered.
        <form onSubmit={handleSubmit}>
    
            {/* This line maps over the schema array provided as a prop. For each
             field in the schema, it renders a <div> containing a <label> and an
              <input> element based on the field properties. */}
            {schema.map(field => (
                <div key ={field.name}>
                    <label>{field.label}</label>
    
                    <input
                        type={field.type}
                        name={field.name}
                        value={formInput[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                    />
    
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;