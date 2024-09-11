import { Suspense, useEffect, useState, lazy } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Home = lazy(async () => await import('./pages/Home'));
const Login = lazy(async () => await import('./pages/Login'));
const Singup = lazy(async () => await import('./pages/Singup'));
const Profile = lazy(async () => await import('./pages/Profile'));
const BookDetail = lazy(async () => await import('./pages/BookDetail'));
import { UserContext } from './utils/GlobalVar.utils'
import Loading from './components/Loading';


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
        <Suspense fallback={<Loading childrenVisible={false} state="loading" />}>
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
