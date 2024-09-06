import { Suspense, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Singup'
import Profile from './pages/Profile'
import BookDetail from './pages/BookDetail'
import { UserContext } from './utils/GlobalVar.utils'


function App() {
  const [currentUserDetails, setCurrentUserDetails] = useState(null);
  useEffect(() => {
    fetch("/api/v1/user/getCurrentUser", { method: 'POST' })
      .then(res => res.json())
      .then(data => setCurrentUserDetails(data.data))
      .catch(err => console.error("Error occure during fetching current userData\n Error: ", err));
    return () => { };
  }, []);
  return (
    <UserContext.Provider value={{ userDetails: currentUserDetails, setUserDetails: setCurrentUserDetails }}>
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
    </UserContext.Provider>
  )
}

export default App
