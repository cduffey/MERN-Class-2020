import React, { useState } from  'react';

const UserForm = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {first, last, email, password};

        if(password === confirmPassword) {
            console.log(newUser);
        }
        else {
            console.log("Passwords do not match!");
        }
        
    };

    return(
        <div class="container">   
            <form onSubmit={ createUser }>
                <div class="form-group">
                    <label>First Name: </label>
                    <input type="text" class="form-control" onChange={ (e) => setFirst(e.target.value) }></input>
                </div>
                <div class="form-group">
                    <label>Last Name: </label>
                    <input type="text" class="form-control" onChange={ (e) => setLast(e.target.value) }></input>
                </div>
                <div class="form-group">
                    <label>E-mail: </label>
                    <input type="email" class="form-control" onChange={ (e) => setEmail(e.target.value) }></input>
                </div>
                <div class="form-group">
                    <label>Password: </label>
                    <input type="password" class="form-control" onChange={ (e) => setPassword(e.target.value) }></input>
                </div>
                <div class="form-group">
                    <label>Password Confirmation: </label>
                    <input type="password" class="form-control" onChange={ (e) => setConfirmPassword(e.target.value) }></input>
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