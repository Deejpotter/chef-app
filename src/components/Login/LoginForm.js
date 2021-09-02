import React, { useContext, useState } from "react";
import DispatchContext from "../Util/DispatchContext";

function LoginForm({ }) {

    const { dispatch } = useContext(DispatchContext);

    const initialState = { username: '', password: '' };
    const [value, setValue] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        if (!value.username || !value.password) return;
        dispatch({ type: 'login', loginDetails: value });
        setValue(initialState);
    };
    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor="usernameField">Username:</label>
            <input autoFocus id='usernameField' className='radius shadow-light' type="text" value={value.username} onChange={e => setValue({ username: e.target.value, password: value.password })} />
            <label htmlFor="passwordField">Password:</label>
            <input id='passwordField' className='radius shadow-light' type="password" value={value.password} onChange={e => setValue({ username: value.username, password: e.target.value })} />
            <input className='bg-main fg-light radius shadow' type="submit" value="Login" />
        </form>
    );
}

export default LoginForm;