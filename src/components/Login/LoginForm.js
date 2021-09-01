import React, { useState } from "react";
import UserContext from "../Util/UserContext";

function LoginForm({ }) {

    const user = useContext(UserContext);

    const initialState = { username: '', password: '' };
    const [value, setValue] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        dispatch({ type: 'login', loginDetails: value });
        setValue("");
    };
    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlfor="usernameField">Username:</label>
            <input autoFocus id='usernameField' className='radius shadow-light' type="text" value={value.username} onChange={e => setValue(e.target.value)} />
            <label htmlfor="passwordField">Password:</label>
            <input id='passwordField' className='radius shadow-light' type="password" placeholder='' value={value.password} onChange={e => setValue(e.target.value)} />
            <input className='bg-main fg-light radius shadow' type="submit" value="Login" />
        </form>
    );
}

export default LoginForm;