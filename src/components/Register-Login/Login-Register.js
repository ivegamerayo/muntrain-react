import React from "react"
import NavBar from '../NavBar/NavBar';

const Login = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div>El login</div>
    </React.Fragment>
  )
}

const Register = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div>El Register</div>
    </React.Fragment>
  )
}

export {Login, Register}