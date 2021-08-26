import React, { useState } from "react";
import Container from "../Util/Container";

function Login({ dispatch }) {
  const initialState = { username: '', password: '' };
  const [value, setValue] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    dispatch({ type: 'login', username: value });
    setValue("");
  };
  return (
    <Container ext='title'>
      <form onSubmit={handleSubmit}>
        <h2>Enter your details to start using your account</h2>
        <p>You're nearly ready to start keeping track of your stock.</p>
        <input autoFocus type="text" value={value} onChange={e => setValue(e.target.value)} />
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <input type="submit" value="Set Username" />
      </form>
    </Container>
  );
}

export default Login;