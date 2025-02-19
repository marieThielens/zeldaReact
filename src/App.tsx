// import { useState } from 'react'
import { Routes, Route } from "react-router"
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import NavBar from './Component/NavBar'
import SignUpPage from "./pages/SignUpPage"
import UserPage from "./pages/UserPage"
import ChallengePage from "./pages/ChallengePage"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path="singin" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="challenge" element={<ChallengePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App;
