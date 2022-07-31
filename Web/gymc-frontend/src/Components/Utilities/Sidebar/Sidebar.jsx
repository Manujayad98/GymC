import React, { useState } from 'react';
import {
    FaBars,
    FaTh,
    FaUserTie,
    FaUserAlt,
    FaVolumeDown,
    FaChartArea,
    FaBell,
    
    FaSignOutAlt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import logo from '../../../images/logo.png'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/sidebar",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Trainers",
            icon:<FaUserTie/>
        },
        {
            path:"/analytics",
            name:"Trainees",
            icon:<FaUserAlt/>
        },
        {
            path:"/comment",
            name:"Announcements",
            icon:<FaVolumeDown/>
        },
        {
            path:"/product",
            name:"Analytics",
            icon:<FaChartArea/>
        },
        {
            path:"/productList",
            name:"Notification",
            icon:<FaBell />
            
        },
        {
            path:"/productList",
            name:"Logout",
            icon:<FaSignOutAlt />
            
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo"> <img src={logo} alt="" /></h1> */}
                   <div style={{display: isOpen ? "block" : "none"}} className="logo">
                    <img src={logo}  alt="" />
                   </div>
                   {/* <span>
                   For Your fitness
                   
                   </span> */}
                   <div style={{marginLeft: isOpen ? "60px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}
           </main>
           
        </div>
    );
};

export default Sidebar;