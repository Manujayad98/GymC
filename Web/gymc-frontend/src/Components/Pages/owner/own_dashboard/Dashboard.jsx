import React, { useState } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'

import Pic1 from '../../../../images/owner.png'
import BarChart from '../../../Utilities/Charts/BarChart'
import Table from '../../../Utilities/Tables/Table2'
import Edit from '../../../../images/Icons/pen-solid.svg'
import './Dashboard.css'

const Dashboard = () => {

  const [ChartData] = useState([
    ["Month", "Income"],
    ["Jan", 11000],
    ["Feb", 2000],
    ["Mar", 2000],
    ["Apr", 5000],
    ["May", 7000],
    ["Jun", 8000],
    ["Jul", 7000],
    ["Aug", 8000],

  ]);

  const [workoutDetailsTableHead] = useState([
    { id: "Time", label: "Time", numeric: false },
    { id: "TrainerName", label: "Trainer Name", numeric: false },
    { id: "TraineeName", label: "Trainee Name", numeric: false }
  ]);

  const [workoutDetails] = useState([
    {
      Time: "09.30 AM",
      TrainerName: "Kasun Perera",
      TraineeName: "Gihan Sekara"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Rasul Silve",
      TraineeName: "Piyath Sandaruwan"
    },
    {
      Time: "09.30 AM",
      TrainerName: "Kasun Perera",
      TraineeName: "Gihan Sekara"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Rasul Silve",
      TraineeName: "Piyath Sandaruwan"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Rasul Silve",
      TraineeName: "Piyath Sandaruwan"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Rasul Silve",
      TraineeName: "Piyath Sandaruwan"

      // abc
    },
  ]);

  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Dasboard" />
        <div className="content-container">

          <div className='own-dashboard-titles'>Today's Available Trainers</div>

          <div className='own-dashboard-card-container'>

            <div className='own-dashboard-card profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={Pic1} alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>T00001</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

            <div className='own-dashboard-card profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={Pic1} alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>T00001</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

            <div className='own-dashboard-card profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={Pic1} alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>T00001</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

            <div className='own-dashboard-card profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={Pic1} alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>T00001</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

            <div className='own-dashboard-card profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={Pic1} alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>T00001</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

          </div>

          <div className='own-dashboard-titles'>Today's Available Trainees</div>

          <div className='own-dashboard-card-container'>
            <div className='own-dashboard-card profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={Pic1} alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>T00001</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

            <div className='own-dashboard-card profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={Pic1} alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>T00001</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

            <div className='own-dashboard-card profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={Pic1} alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>T00001</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

            <div className='own-dashboard-card profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={Pic1} alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>T00001</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

            <div className='own-dashboard-card profile-cards'>
              <div className='own-dashboard-card-img-container'>
                <img src={Pic1} alt="" />
              </div>
              <div className='own-dashboard-card-content'>
                <div className='staffID'>T00001</div>
                <div className='staffName'>Sanjana Rajapaksha</div>
              </div>
            </div>

          </div>

          <div className='own-dashboard-chart-table-container'>

            <div className='own-dashboard-chart-container'>
              <div className='own-dashboard-container-head'>Annual Income</div>
              <div className='own-dashboard-card chart-cards'>
                <BarChart data={ChartData} />
              </div>
            </div>

            <div className='own-dashboard-table-container'>
              <div className='own-dashboard-container-head'>Today's Workouts</div>
              <div className='own-dashboard-card table-cards'>
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