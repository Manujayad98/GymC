import React, { useState } from 'react'
import '../own_sidebar/Sidebar.css'
import './Analytics.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BarChart from '../../../Utilities/Charts/BarChart'
import Table from '../../../Utilities/Tables/Table2'
import Dropdown from '../../../Utilities/Form/Dropdown'


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
      },
    ]);
  

  return (
    <div className='main-container'>
      <SidebarO/>
      <div className='body-container'> 
          <HeaderO title="Analytics"/>
          <div className="content-container">
              <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3">

                <Tab eventKey="home" title="Gym Progress" >

                <div className='own-analytics-card-container'>
                  
                  <div className='own-analytics-card profile-cards'>

                  <div className='own-analytics-card-content'>
                    <div className='staffID'>No of Trainers</div>
                    <div className='staffName'>5</div>
                  </div>
                  
                </div>
                <div className='own-analytics-card profile-cards'>

                  <div className='own-analytics-card-content'>
                    <div className='staffID'>No of Trainees</div>
                    <div className='staffName'>5</div>
                  </div>
                  
                </div>
                <div className='own-analytics-card profile-cards'>

                  <div className='own-analytics-card-content'>
                    <div className='staffID'>No of Excercises</div>
                    <div className='staffName'>5</div>
                  </div>
                  
                </div>
                <div className='own-analytics-card profile-cards'>

                  <div className='own-analytics-card-content'>
                    <div className='staffID'>No of Equipments</div>
                    <div className='staffName'>5</div>
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
                    <div className='own-dashboard-container-head'>This Month's Income</div>
                    <div className='own-dashboard-card chart-cards'>
                      <BarChart data={ChartData} />
                    </div>
                  </div>
                </div>
                <div className='own-dashboard-chart-table-container'>

                  <div className='own-dashboard-chart-container'>
                    <div className='own-dashboard-container-head'>Available Excercises</div>
                    <div className='own-dashboard-card table-cards'>
                      <Table
                        rows={workoutDetails}
                        headCells={workoutDetailsTableHead}
                      />
                    </div>
                  </div>

                  <div className='own-dashboard-table-container'>
                    <div className='own-dashboard-container-head'>Available Payment Plans</div>
                    <div className='own-dashboard-card table-cards'>
                      <Table
                        rows={workoutDetails}
                        headCells={workoutDetailsTableHead}
                      />
                    </div>
                  </div>
                </div>


                </Tab>
                <Tab eventKey="profile" title="Reports">
                  Reports
                  {/* <Dropdown value={}/> */}
                </Tab>
  
              </Tabs>
          </div>
          
      </div>
    </div>
  )
}

export default Dashboard