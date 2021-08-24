import React, { useState } from "react";
import Container from "../Util/Container";

function Titlescreen({ dispatch }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    dispatch({ type: 'setUsername', username: value });
    setValue("");
  };
  return (
    <Container ext='title'>
      <form onSubmit={handleSubmit}>
        <h2>Please enter your username</h2>
        <p>Create a username to start using the app.</p>
        <input autoFocus type="text" value={value} onChange={e => setValue(e.target.value)} />
        <input type="submit" value="Set Username" />
      </form>
    </Container>
  );
}

export default Titlescreen;