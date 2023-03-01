import React, { useState } from "react"
import "./register.css"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  useStatStyles,
  Button,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Register = ({setRegButton}) => {
  const [regNumber, setRegNumber] = useState("")
  const [regPass, setRegPass] = useState("")
  return (
    <div className="register">
      <h1>Register Room</h1>
      <FormControl>
        <FormLabel>Room number</FormLabel>
        <Input
          value={regNumber}
          onChange={(e) => setRegNumber(e.target.value)}
          type="text"
        />
        <FormLabel>Room password</FormLabel>
        <Input
          value={regPass}
          onChange={(e) => {
            setRegPass(e.target.value)
          }}
          type="password"
        />
      </FormControl>
      <Button onClick={() => setRegButton(true)} colorScheme="green">
        Button
      </Button>
      <a href="/login">Existing room</a>
    </div>
  )
}

export default Register
