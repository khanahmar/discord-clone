import { useState, useEffect } from "react"
import "./App.css"
import Register from "./assets/components/register/Register"
import Login from "../src/assets/components/login/Login"
import { db } from "./firebase"
import Chat from "./assets/components/chat/Chat"
import { roomCollection } from "./firebase"
import { addDoc, onSnapshot } from "firebase/firestore"

function App() {
  const [chatPage, setChatPage] = useState(false)
  const [pageCheck, setPageCheck] = useState(false)
  const [rooms, setRooms] = useState([])
  console.log(rooms.map((room) => room.data))
  useEffect(() => {
    const unsubscribe = onSnapshot(roomCollection, (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return { data: doc.data(), id: doc.id }
        })
      )
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="App">
      {!pageCheck && (
        <Register
          pageCheck={setPageCheck}
          chatPage={chatPage}
          setChatPage={setChatPage}
          rooms={rooms}
        />
      )}
      {pageCheck && (
        <Login
          rooms={rooms}
          pageCheck={setPageCheck}
          chatPage={chatPage}
          setChatPage={setChatPage}
        />
      )}
      {chatPage && <Chat />}
    </div>
  )
}

export default App
