import { useState } from "react"
import "./App.css"
import Register from "./assets/components/register/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../src/assets/components/login/Login"

function App() {
  const [regButton, setRegButton] = useState(false)
  console.log(regButton)
  return (
    <div className="App">
      {!regButton && <Register setRegButton={setRegButton} />}
      {regButton && <Login />}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
