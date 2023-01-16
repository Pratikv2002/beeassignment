import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

import "./Signin.css"
import axios from "../../Axios/axios"
import { useState } from 'react'
function Signin() {
    const navigate = useNavigate();

    const initialState ={ email: '', password: ''}
    const [formData, setFormData] = useState(initialState)
    const [islogin, setlogin] = useState(true)
    const [status, setStatus] = useState()

    const handleChange =(e)=> {
        setFormData( {...formData, [e.target.name] : e.target.value} )
       
    }

    function handleSignInClick (e){
        e.preventDefault();
        axios.post("/admin/login",{email:formData.email,password:formData.password})
        .then((result) => {
           if(result.data.email===formData.email){
            localStorage.setItem('admin-name',result.data.name)
            localStorage.setItem('admin-email',result.data.email)
            localStorage.setItem('admin-id',result.data.id)
            localStorage.setItem('admin',result.data.admin)
             navigate("/adminPanal")
           } 
        }).catch((err) => {
            setStatus(err.response.status)
        });
    }
  return (
    <div style={{display:"flex",justifyContent:'center',alignItems:"center",marginTop:"5%"}}>
        <div className='SignInDiv'>
        <form onSubmit={handleSignInClick} >
            {/* Email input */}
            <div className=" mb-4">
                <input type="email" id="form2Example1" className="form-control" name='email' onChange={handleChange} required/>
                
            {status ==404 ?<label className="form-check-label" style={{color:"red"}} htmlFor="form2Example31">User doesn't exist</label>: <label className="form-label" htmlFor="form2Example1">Email address</label>}
                
            </div>
            {/* Password input */}
            <div className=" mb-4">
                <input type="password" id="form2Example2" className="form-control"   name='password' onChange={handleChange} required/>
                {status ==400 ? <label className="form-check-label" style={{color:"red"}} htmlFor="form2Example31">Incorrect Password</label>:<label className="form-label" htmlFor="form2Example1">Password</label>}
            </div>
            {/* 2 column grid layout for inline styling */}
            <div className="row mb-4">
                <div className="col ">
                {/* Checkbox */}
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example31"
                    defaultChecked=""
                    required
                    />
                    <label className="form-check-label" htmlFor="form2Example31">
                    {" "}
                    Remember me{" "}
                    </label>
                </div>
                </div>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
            </button>
            {/* Register buttons */}
            <div className="text-center">
                {/* Simple link */}
                <Link to="#!">Forgot password?</Link>
                </div>
            <div className="text-center">
                <p>
                Not a member? <Link to="/adminRegister">Register</Link>
                </p>
            </div>
            </form>
            </div>
    </div>
  )
}

export default Signin