import React, { useState } from "react";

function CreateAccountForm({ dispatch }) {
    const initialState = { username: '', email: '', password: '', passwordAgain: '' };
    const [value, setValue] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        dispatch({ type: 'createAccount', accountDetails: value });
        setValue("");
    };
    return (
        <form className='account-form' onSubmit={handleSubmit}>
            <label htmlfor="usernameField">Username:</label>
            <input autoFocus id='usernameField' className='radius shadow-light' type="text" value={value.username} onChange={e => setValue(e.target.value)} />
            <label htmlfor="emailField">Email:</label>
            <input id='emailField' className='radius shadow-light' type="email" value={value.email} onChange={e => setValue(e.target.value)} />
            <label htmlfor="passwordField">Password:</label>
            <input id='passwordField' className='radius shadow-light' type="password" value={value.password} onChange={e => setValue(e.target.value)} />
            <label htmlfor="passwordConfirmField">Password again:</label>
            <input id='passwordConfirmField' className='radius shadow-light' type="password" value={value.passwordAgain} onChange={e => setValue(e.target.value)} />
            <input className='bg-main fg-light radius shadow' type="submit" value="Login" />
        </form>
    );
}

export default CreateAccountForm;