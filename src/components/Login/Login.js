import React, { useState } from "react";
import ButtonLink from "../Util/ButtonLink";
import LoginForm from "./LoginForm";

function Login({ dispatch }) {
  return (
    <>
      <h2>Enter your account details to log in</h2>
      <p>You're nearly ready to start keeping track of your stock.</p>
      <LoginForm />
      <p className='mb-1'>-or-</p>
      <ButtonLink to='/create' bg='main' fg='light'>Create account</ButtonLink>
    </>
  );
}

export default Login;;