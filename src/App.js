import React from 'react';
import './App.css';
//componets
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Tab componets
import Home from './components/pages/Home'
import Coaches from './components/pages/Coaches';
import Lessons from './components/pages/Lessons';
import Info from './components/pages/Info';
import Footer from './components/Footer';
//Authentication componets
import SignUp from './components/SignUp';
import Login from './components/Login'
//Booking componets
import Dashboard from './components/Dashboard';
import BookUser from "./components/BookUser";
import Profile from "./components/Profile";
//toast componets
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
     <Route path='/' exact element={<Home/>}/>
     <Route path='/coaches' exact element={<Coaches/>}/>
     <Route path='/lessons' exact element={<Lessons/>}/>
     <Route path='/signup' exact element={<SignUp/>}/> 
     <Route path='/info' exact element={<Info/>}/>
     <Route path='/login' exact element={<Login/>}/>  
     <Route path='/dashboard' exact element={<Dashboard/>}/>
     <Route path='/profile/:id' exact element={<Profile />} />
     <Route path='/book/:user' exact element={<BookUser />} />
    </Routes>
    <Footer/>
    </Router>
    <ToastContainer />
    
   
   </>
    
         
  );
}

export default App;
