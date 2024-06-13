import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/Authcontext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bussines from './components/Bussines';
import About from './components/About';
import Contact from './components/Contact';
import PostBusinessForm from './components/PostBusinessForm';
import AddBusiness from './components/Addbussiness';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import AddBussiness from './components/Addbussiness';
import Profile from './components/Profile';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        {isLoggedIn ? (
          <>
            <Route path="/bussines" element={<Bussines />} />
            <Route path="/postBusinessForm" element={<PostBusinessForm />} />
            <Route path="/addbussiness" element={<AddBussiness/>} />
            <Route  path="/profile" element={<Profile/>} />

          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
