import React, { useState } from "react"
import "./register.css"
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import { roomCollection } from "../../../firebase"
import { addDoc } from "firebase/firestore"
import { async } from "@firebase/util"

const Register = ({ pageCheck, setChatPage, chatPage, rooms }) => {
  const [regNumber, setRegNumber] = useState("")
  const [regClass, setRegClass] = useState(false)
  const [regPass, setRegPass] = useState("")
  const roomsData = rooms.map((room) => room.data)

  function addRoom() {
    setRegClass(false)
    if (regNumber != "" && regPass != "") {
      roomsData.forEach(async (room) => {
        if (room.number !== regNumber) {
          setChatPage(true)
          await addDoc(roomCollection, { number: regNumber, password: regPass })
        } else {
          setRegClass(true)
        }
      })
    }
  }
  console.log(regClass)
  return (
    <div style={{ display: chatPage && "none" }} className="register">
      <h1>Register Room</h1>
      <FormControl>
        <FormLabel>Room number</FormLabel>
        <Input
          style={{
            border: regClass && "1px solid red",
          }}
          placeholder={regClass ? "Room already exists" : "Enter room"}
          value={regNumber}
          onChange={(e) => setRegNumber(e.target.value)}
          type="text"
        />
        <FormLabel>Room password</FormLabel>
        <Input
          style={{
            border: regClass && "1px solid red",
          }}
          value={regPass}
          onChange={(e) => {
            setRegPass(e.target.value)
          }}
          type="password"
        />
      </FormControl>
      <Button onClick={() => addRoom()} colorScheme="green">
        Button
      </Button>
      <p>
        Existing room{" "}
        <span
          onClick={() => pageCheck(true)}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Log In
        </span>
      </p>
    </div>
  )
}

export default Register
