import React from "react";
import Container from "../Util/Container";
import DeleteButton from "../Util/DeleteButton";

function Footer({ state, dispatch }) {
  return (
    <footer>
      <Container ext='footer'>
        {state.username && !state.modalOpen ?
          <DeleteButton state={state} dispatch={dispatch} />
          :
          <p>Footer</p>
        }
      </Container>
    </footer>
  );
}

export default Footer;