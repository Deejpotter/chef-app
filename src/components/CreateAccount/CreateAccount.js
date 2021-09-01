import React, { useState } from "react";
import ButtonLink from "../Util/ButtonLink";
import CreateAccountForm from "./CreateAccountForm";

function CreateAccount({ }) {
  return (
    <>
      <h2>Enter your details to start using your account</h2>
      <p>You're nearly ready to start keeping track of your stock.</p>
      <CreateAccountForm />
      <p className='mb-1'>-or-</p>
      <ButtonLink to='/login' bg='main' fg='light'>Go back to login</ButtonLink>
    </>
  );
}

export default CreateAccount;