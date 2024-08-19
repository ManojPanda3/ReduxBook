import { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Singup'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading... </>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/singup" element={<Singup />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
