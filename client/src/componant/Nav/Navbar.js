import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [menuChecked, setmenuBtnClick] = useState(false)
  function menuBtnClick(event){
       setmenuBtnClick(event.target.checked)
       console.log(menuChecked);
  }
  return (
    <div>
        <div  style={{color:"red",zIndex:"10" }} >
      <header>
        <div className="header">
          <NavLink to="/" className="logo" style={{width:"auto",marginBottom:"0px"}}>
            <span style={{}}></span>
            <span className="logo-name" >
              MMIT 
            </span>
            <span style={{ }}></span>
          </NavLink>
          <div className='menu-div'>
              <input className="menu-btn" type="checkbox" id="menu-btn" onClick={menuBtnClick}/>
              <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
              </label>
          </div>
          <ul className="menu">
            <li>
              <NavLink
                className="homei navItem"
                to="/home"
                tag={Link}
                activestyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5}}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec navItem"
                to="/studyMaterial"
                tag={Link}
                activestyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5,  }}
              >
                Study Material
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp navItem"
                to="/timeTable"
                tag={Link}
                activestyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5,}}
              >
                Time Table
              </NavLink>
            </li>
            <li>
              <NavLink
                className="projects navItem"
                to="/compititionRegisteration"
                tag={Link}
                activestyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5,}}
              >
                Compitition Registeration
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr navItem"
                to="/adminLogin"
                tag={Link}
                activestyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5,}}
              >
                Admin Login
              </NavLink>
            </li>
          </ul>
        </div>
     {menuChecked &&<div className='headerDiv2'>
        <ul style={{margin:"0px", padding:"0px 0px 10px 0px"}} className="menu-div2">
            <li>
              <NavLink
                className="homei navItem"
                to="/home"
                tag={Link}
                activestyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5}}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec navItem"
                to="/studyMaterial"
                tag={Link}
                activestyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5,  }}
              >
                Study Material
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp navItem"
                to="/timeTable"
                tag={Link}
                activestyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5,}}
              >
                Time Table
              </NavLink>
            </li>
            <li>
              <NavLink
                className="projects navItem"
                to="/compititionRegisteration"
                tag={Link}
                activestyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5,}}
              >
                Compitition Registeration
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr navItem"
                to="/adminLogin"
                tag={Link}
                activestyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5,}}
              >
                Admin Login
              </NavLink>
            </li>
          </ul>
        </div>}
        </header>
      </div>
    </div>
  )
}

export default Navbar