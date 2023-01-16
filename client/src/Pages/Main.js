import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Index';
import Register from './Register/Index'
import Admin from './Admin/Admin';
import Dashboard from "../componant/AdminPanal/Pages/Dashboard"
import RequestForAdmin from "../componant/AdminPanal/Pages/RequestForAdmin"
import Home from "../Pages/Home/Home"
import UploadMaterial from '../componant/AdminPanal/Pages/UploadMaterial';
import StudyMaterial from './Study_Material/StudyMaterial';

function Main() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/adminLogin" element={<Login/>}/>
        <Route path="/adminRegister" element={<Register/>}/>
        <Route path="/adminPanal" element={<Admin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/adminRequest" element={<RequestForAdmin/>}/>
        <Route path="/UploadMaterial" element={<UploadMaterial/>}/>
        <Route path="/studyMaterial" element={<StudyMaterial/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default Main