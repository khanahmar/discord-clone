import React, { useState } from "react"
import "../register/register.css"
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

const Register = ({ pageCheck, setChatPage, chatPage }) => {
  const [loginNumber, setloginNumber] = useState("")
  const [loginPass, setloginPass] = useState("")
  return (
    <div style={{ display: chatPage && "none" }} className="register">
      <h1>Log In Room</h1>
      <FormControl>
        <FormLabel>Room number</FormLabel>
        <Input
          value={loginNumber}
          onChange={(e) => setloginNumber(e.target.value)}
          type="text"
        />
        <FormLabel>Room password</FormLabel>
        <Input
          value={loginPass}
          onChange={(e) => {
            setloginPass(e.target.value)
          }}
          type="password"
        />
      </FormControl>
      <Button onClick={() => setChatPage(true)} colorScheme="green">
        Button
      </Button>
      <p>
        Register room room{" "}
        <span
          onClick={() => pageCheck(false)}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Register
        </span>
      </p>
    </div>
  )
}

export default Register
