import React, { useState } from  'react';

const UserForm = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstError, setFirstError] = useState(true);
    const [lastError, setLastError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);

    const validateFirst = (e) => {
        setFirst(e.target.value);
        if (e.target.value.length < 2) {
            setFirstError(true);
        }
        else {
            setFirstError(false);
        }
    }

    const validateLast = (e) => {
        setLast(e.target.value);
        if (e.target.value.length < 2) {
            setLastError(true);
        }
        else {
            setLastError(false);
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError(true);
        }
        else {
            setEmailError(false);
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value)
        if(password !== confirmPassword) {
            setPasswordError(false);
        }
        else {
            setPasswordError(true);
        }
    }

    const validatePasswordConfirmation = (e) => {
        setConfirmPassword(e.target.value)
        if(password != confirmPassword) {
            setPasswordError(false);
        }
        else {
            setPasswordError(true);
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {first, last, email, password};
    };

    return(
        <div class="container">   
            <form onSubmit={ createUser }>
                <div class="form-group">
                    <label>First Name: </label>
                    <input type="text" class="form-control" onChange={ validateFirst }></input>
                    <label class="text-danger">{ firstError ? "First name must be at least 2 characters" : "" }</label>
                </div>
                <div class="form-group">
                    <label>Last Name: </label>
                    <input type="text" class="form-control" onChange={ validateLast }></input>
                    <label class="text-danger">{ lastError ? "Last name must be at least 2 characters" : "" }</label>
                </div>
                <div class="form-group">
                    <label>E-mail: </label>
                    <input type="email" class="form-control" onChange={ validateEmail }></input>
                    <label class="text-danger">{ emailError ? "E-mail must be at least 5 characters" : "" }</label>
                </div>
                <div class="form-group">
                    <label>Password: </label>
                    <input type="password" class="form-control" onChange={ validatePassword }></input>
                </div>
                <div class="form-group">
                    <label>Password Confirmation: </label>
                    <input type="password" class="form-control" onChange={ validatePasswordConfirmation }></input>
                    <label class="text-danger">{ passwordError ? "Passwords must match!" : ""}</label>
                </div>
                <div class="form-group">
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <h1>Your Form Data</h1>
            <table class="table">
                <thead>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">E-mail</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{first}</td>
                        <td>{last}</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserForm;