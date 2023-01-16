
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Link } from "react-router-dom";
import {Navigate} from 'react-router-dom';
import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// DATA FILE
import { SidebarData } from "./SidebarData";
// CSS

import "./SideBar.css"

function SideBar() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>     
     <IconContext.Provider value={{ color: "#fff",size:"1.5em"}}>
        {/* All the icons now are white */}
        <nav className='' style={{backgroundColor:"#a1c5ff" ,height:"690px"}}>
          <ul className="p-0" style={{listStyle:'none',backgroundColor:"#a1c5ff",minWidth:'190px'}}>
            {/* <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={'px-3 py-2'} style={{}}>
                  <Link to={item.path}>
                       {item.icon}
                    <span className='p-2' style={{color:"black"}}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
</>
  )
}

export default SideBar