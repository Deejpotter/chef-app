import React, { useState } from "react";

function LoginForm() {
    const initialState = { username: '', password: '' };
    const [value, setValue] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        dispatch({ type: 'login', loginDetails: value });
        setValue("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlfor="usernameField">Username:</label>
            <input autoFocus id='usernameField' type="text" value={value} onChange={e => setValue(e.target.value)} />
            <label htmlfor="passwordField">Password:</label>
            <input id='passwordField' type="text" value={value} onChange={e => setValue(e.target.value)} />
            <input type="submit" value="Login" />
        </form>
    );
}

export default LoginForm;