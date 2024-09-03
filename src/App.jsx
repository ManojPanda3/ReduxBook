import { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Singup'
import Profile from './pages/Profile'
import BookDetail from './pages/BookDetail'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading... </>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/singup" element={<Singup />}></Route>
          <Route path="/profile/:UserName" element={<Profile />}></Route >
          <Route path="/book-detail/:BookId" element={<BookDetail />}></Route >
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
