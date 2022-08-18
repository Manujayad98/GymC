import React, { useState } from "react";
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'

import './Recept_Notifications.css'

export default function Trainers() {

  const [trainerDetails] = useState([
      {
          
          Time: "10.00 a.m.",
          Notification: "Trainee Jake Hall ID just checked out",
          Actions: (
              <span>
              
                      {/* <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span> */}
                      
                      <span style={{ paddingRight: "20px", marginLeft:"80%" }}><img src={Trash} alt="" height={20} width={20} /></span>
                  
              </span >
          ),
      },

      {
          
          Time: "09.45 a.m.",
          Notification: "Trainee Nehara Perera ID T125486 just checked in",
          Actions: (
              <span>
              
                      {/* <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span> */}
                      
                      <span style={{ paddingRight: "20px", marginLeft:"80%" }}><img src={Trash} alt="" height={20} width={20} /></span>
                  
              </span >
          ),
      },

      {
          
          Time: "08.00 a.m.",
          Notification: "Trainer Calum Scott is on leave today",
          Actions: (
              <span>
              
                      {/* <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span> */}
                      
                      <span style={{ paddingRight: "20px", marginLeft:"80%" }}><img src={Trash} alt="" height={20} width={20} /></span>
                  
              </span >
          ),
      },

      {
          
          Time: "10.00 a.m.",
          Notification: "Trainee Jake Hall ID just checked out",
          Actions: (
              <span>
              
                      {/* <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span> */}
                      
                      <span style={{ paddingRight: "20px", marginLeft:"80%" }}><img src={Trash} alt="" height={20} width={20} /></span>
                  
              </span >
          ),
      },

      {
          
          Time: "09.45 a.m.",
          Notification: "Trainee Nehara Perera ID T125486 just checked in",
          Actions: (
              <span>
              
                      {/* <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span> */}
                      
                      <span style={{ paddingRight: "20px", marginLeft:"80%" }}><img src={Trash} alt="" height={20} width={20} /></span>
                  
              </span >
          ),
      },

      {
          
          Time: "08.00 a.m.",
          Notification: "Trainer Calum Scott is on leave today",
          Actions: (
              <span>
              
                      {/* <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span> */}
                      
                      <span style={{ paddingRight: "20px", marginLeft:"80%" }}><img src={Trash} alt="" height={20} width={20} /></span>
                  
              </span >
          ),
      },

      {
          
          Time: "10.00 a.m.",
          Notification: "Trainee Jake Hall ID just checked out",
          Actions: (
              <span>
              
                      {/* <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span> */}
                      
                      <span style={{ paddingRight: "20px", marginLeft:"80%" }}><img src={Trash} alt="" height={20} width={20} /></span>
                  
              </span >
          ),
      }, 

  ]);

  const [trainerDetailsTableHead] = useState([
     
    
  ]);

  return (

      <div className='main-container'>
          <SidebarR />
          <div className='body-container'>
              <HeaderR title="Notifications" />
              <div className="contents-container">
                  
                  <Table
                      rows={trainerDetails}
                      headCells={trainerDetailsTableHead}
                      tableName={"Notifications"}
                  />
              </div>
          </div >
      </div >
  )
}
