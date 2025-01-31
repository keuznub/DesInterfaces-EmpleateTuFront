
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Layout from './layouts/Layout'
import Register from './pages/Register'
import UserList from './pages/UserList'
import OfferList from './pages/OffersList'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='home' index element={<Home/>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="users" element={<UserList />} />
          <Route path="offers" element={<OfferList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
