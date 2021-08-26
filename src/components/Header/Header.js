import React from "react"
import { Link } from "react-router-dom"
import Container from "../Util/Container"

function Header(props) {
  return (
    <header>
      <Container ext='header'>
        <Link to='/'>
          <h1>Todo App</h1>
        </Link>
      </Container>
    </header>
  )
}

export default Header