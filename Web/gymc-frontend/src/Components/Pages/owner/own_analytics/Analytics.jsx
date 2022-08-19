import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

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

  // EXCERCISE TABLE

  const [workoutDetailsTableHead] = useState([
    { id: "Name", label: "Name", numeric: false },
    { id: "Repetitions", label: "No of Repetitions", numeric: false }
  ]);

  const [workoutDetails] = useState([
    {
      Name: "Incline Press",
      Repetitions: "15 Reps"
    },
    {
      Name: "Incline Press",
      Repetitions: "15 Reps"
    },
    {
      Name: "Incline Press",
      Repetitions: "15 Reps"
    },
    {
      Name: "Incline Press",
      Repetitions: "15 Reps"
    },
    {
      Name: "Incline Press",
      Repetitions: "15 Reps"
    },
    {
      Name: "Incline Press",
      Repetitions: "15 Reps"
    },
  ]);

  // PRICING TABLE

  const [priceDetailsTableHead] = useState([
    { id: "Type", label: "Type", numeric: false },
    { id: "Price", label: "Price", numeric: false }
  ]);

  const [priceDetails] = useState([
    {
      Type: "Daily",
      Price: "550.00"
    },
    {
      Type: "Monthly - Personal",
      Price: "550.00"
    },
    {
      Type: "Monthly - Nonpersonal",
      Price: "550.00"
    },
  ]);


  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Analytics" />
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
                      rows={priceDetails}
                      headCells={priceDetailsTableHead}
                    />
                  </div>
                </div>
              </div>


            </Tab>
            <Tab eventKey="profile" title="Reports">
              <div className='dropdown'>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Report Type</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select </option>
                    <option> select 1</option>
                    <option> select 2</option>
                    <option> select 3</option>
                    <option> select 4</option>
                  </select>
                </div>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Duration</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select </option>
                    <option> select 1</option>
                    <option> select 2</option>
                    <option> select 3</option>
                    <option> select 4</option>
                  </select>
                </div>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Time</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select </option>
                    <option> select 1</option>
                    <option> select 2</option>
                    <option> select 3</option>
                    <option> select 4</option>
                  </select>
                </div>
              </div>
            </Tab>

          </Tabs>
        </div>

      </div>
    </div>
  )
}

export default Dashboard