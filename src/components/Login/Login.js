import React, { useState } from "react";
import Container from "../Util/Container";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <Container ext='center'>
      <h2>Enter your details to start using your account</h2>
      <p>You're nearly ready to start keeping track of your stock.</p>
      <LoginForm />
    </Container>
  );
}

export default Login;