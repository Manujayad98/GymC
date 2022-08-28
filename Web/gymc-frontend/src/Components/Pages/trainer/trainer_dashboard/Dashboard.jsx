import React, { useState, useEffect } from 'react'
import '../trainer_dashboard/Dashboard.css'
import SidebarO from '../trainer_sidebar/Sidebar'
import HeaderO from '../trainer_header/Header'
import Table from '../../../Utilities/Tables/Table2'
import './Dashboard.css'
import SampleCal from '../../../Utilities/CalendarComp/SampleCal'


const Dashboard = () => {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  //ANNUAL INCOME CHART
  const Annualdata = [
    ["Element", "Income", { role: "style" }],
    ["Jan", 8.94, "#b87333"], 
    ["Feb", 10.49, "silver"], 
    ["Mar", 19.3, "gold"],
    ["Apr", 21.45, "color: #e5e4e2"],
    ["May", 18.94, "#b87333"], 
    ["Jun", 12.49, "silver"], 
    ["Jul", 9.3, "gold"],
    ["Aug", 17.45, "color: #e5e4e2"],
    ["Sep", 18.94, "#b87333"], 
    ["Oct", 19.49, "silver"], 
    ["Nov", 15.3, "gold"],
    ["Dec", 21.45, "color: #e5e4e2"], 
  ];

  const [workoutDetailsTableHead] = useState([
    { id: "Time", label: "Time", numeric: false },
    { id: "TrainerName", label: "Trainee Name", numeric: false },
    { id: "TraineeName", label: "Type", numeric: false }
  ]);

  const [workoutDetails] = useState([
    {
      Time: "09.30 AM",
      TrainerName: "Kasun Perera",
      TraineeName: "Appoinment"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Rasul Silva",
      TraineeName: "Reservation"
    },
    {
      Time: "09.30 AM",
      TrainerName: "Kasun Perera",
      TraineeName: "Appoinment"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Sadaru Ekanayake",
      TraineeName: "Reservation"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Kalmi Siriwardane",
      TraineeName: "Reservation"
    },
    
    {
      Time: "10.30 AM",
      TrainerName: "Denuka Perera",
      TraineeName: "Reservation"

      // abc
    },
  ]);

  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Dashboard" />
        <div className="content-container">

          
      

          <div className='trainer-dashboard-chart-table-container'>

            <div className='trainer-dashboard-chart-container'>
              <div className='trainer-dashboard-container-head'>My Schedule</div>
              <div className='trainer-dashboard-card trainer-dashboard-chart-cards'>
                <div className='trainer-calender'>
                  <SampleCal />
                </div>
              </div>
            </div>

            <div className='trainer-dashboard-table-container'>
              <div className='trainer-dashboard-container-head'>Appoinments & Reservations</div>
              <div className='trainer-dashboard-card trainer-dashboard-table-cards'>
                <Table
                  rows={workoutDetails}
                  headCells={workoutDetailsTableHead}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Dashboard