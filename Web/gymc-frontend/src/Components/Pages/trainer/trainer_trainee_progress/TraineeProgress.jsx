import React, { useState } from 'react'
import '../trainer_sidebar/Sidebar.css'
import SidebarT from '../trainer_sidebar/Sidebar'
import HeaderT from '../trainer_header/Header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import T1 from '../../../../images/t1.png'
import Pic1 from '../../../../images/owner.png'
import Card from 'react-bootstrap/Card'
// import Collapsible from 'react-collapsible';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Chart } from "react-google-charts";
import './TraineeProgress.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

const TraineeProgress = () => {
  const LineData = [
    ['x', 'Biceps', 'Forearm', 'Chest', 'Thighs', 'Hips'],
    [0, 0, 0, 0, 0, 0],
    [1, 10, 5, 4, 6, 7],
    [2, 23, 15, 4, 14, 18],
    [3, 17, 9, 35, 22, 28],
    [4, 18, 10, 14, 17, 25],
    [5, 9, 5, 11, 21, 33],
    [6, 11, 3, 16, 17, 44],
    [7, 27, 19, 33, 44, 56],
  ]
  const LineChartOptions = {
    hAxis: {
      title: 'Time', viewWindow: { min: 0, max: 10 }
    },
    vAxis: {
      title: '',
    },
    series: {
      1: { curveType: 'function' },
    },
  }
  const chartEvents = [
    {
      callback: ({ chartWrapper, google }) => {
        const chart = chartWrapper.getChart();
        chart.container.addEventListener("click", (ev) => console.log(ev))
      },
      eventName: "ready"
    }
  ];

  //table data
  const [workoutDetailsTableHead] = useState([
    { label: "exercise", id: "incline", numeric: false },
    { label: "Repitions", id: "reps", numeric: false },


  ]);
  const [workoutDetails] = useState([
    {
      incline: "Incline Press",
      reps: "15 Reps",


    },
    {
      incline: "Incline Press",
      reps: "15 Reps",


    },
    {
      incline: "Incline Press",
      reps: "15 Reps",


    },



  ]);
  const [dietDetailsTableHead] = useState([
    { label: "Nutrition", id: "nutrition", numeric: false },
    { label: "Calorie Intake", id: "CalorieIntake", numeric: false },
    { id: "delete", numeric: false },

  ]);
  // const [dietDetails] = useState([
  //   {
  //     Date_Time: "2022/08/15 09.30 AM",
  //     Topic: "Center Closure",
  //     Note: "Fitness center is closed on 20 th August 2022"


  //   },
  //   {
  //     Date_Time: "2022/08/15 09.30 AM",
  //     Topic: "Center Closure",
  //     Note: "Fitness center is closed on 20 th August 2022",
  //   },

  // ]);

  const [dietDetails] = useState([
    {
      nutrition: "Nutrition 1",
      CalorieIntake: "25",
    },
    {
      nutrition: "Nutrition 1",
      CalorieIntake: "25",
    },
    {
      nutrition: "Nutrition 1",
      CalorieIntake: "25",
    },

  ]);
  const [excerciseDetails, setExcerciseDetails] = useState([
    {
      // ExerciseID: 1,
      Name: "Incline Press",
      Repititions: 0
    },
    {
      // ExerciseID: 2,
      Name: "Incline Press",
      Repititions: 0

    },
    {
      // ExerciseID: 3,
      Name: "Incline Press",
      Repititions: 0

    },
    {
      // ExerciseID: 4,
      Name: "Incline Press",
      Repititions: 0

    },
    {
      // ExerciseID: 5,
      Name: "Incline Press",
      Repititions: 0

    },

  ]);

  return (
    <div className='main-container'>
      <SidebarT />
      <div className='body-container'>
        <HeaderT title="Trainee Progress" />
        <div className="own-trainee-progress-content-container">
          <div className="own-trainee-progress-left">
            {/* <div className="own-trainee-progress-profile">
              <div className="otpp-card">
                <div className="own-trainee-progress-profile-pic">
                  <img src={Pic1} alt="" />
                </div>
                <div className="own-trainee-progress-profile-content">
                  <h6>Sanjana Rajapakse</h6>
                  <h5>T0001</h5>
                </div>
              </div>
            </div> */}
            <div className="own-trainee-progress-chart">
              <div className="otpc-card">

                <Chart
                  width={'1150px'}
                  height={'410px'}
                  chartType="LineChart"
                  loader={<div>Loading Chart</div>}
                  data={LineData}
                  options={LineChartOptions}
                  rootProps={{ 'data-testid': '2' }}
                  chartEvents={chartEvents}
                />
              </div>
            </div>
          </div>
          {/* <div className="own-trainee-progress-right">
            <div className="own-trainee-progress-workout">
              <div className="otpw-card">
                <h4 className="progress-workout-head">Workout No-W003</h4>
                <Tabs className="dietworkout_tab">
                  <Tab eventKey="home" title="Workout" >

                    <div style={{ padding: '20px' }}>
                      <MaterialTable
                        title="Exersices"
                        columns={[
                          { title: "Name", field: "Name" },
                          { title: "Repitition Count", field: "Repititions" },
                        ]}
                        icons={TableIcons}
                        data={excerciseDetails}
                        options={{
                          pageSize: 3,
                          pageSizeOptions: [6, 12, 15],
                          headerStyle: {
                            backgroundColor: '#1F0106',
                            color: '#FFF',
                            hover: '#FFF'
                          }
                        }}
                      />
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Diet" >
                   
                    <div style={{ padding: '20px' }}>
                      <MaterialTable
                        title="Diet Plan"
                        columns={[
                          { title: "nutrition", field: "nutrition" },
                          { title: "CalorieIntake", field: "CalorieIntake" },
                        ]}
                        icons={TableIcons}
                        data={dietDetails}
                        options={{
                          pageSize: 3,
                          pageSizeOptions: [6, 12, 15],
                          headerStyle: {
                            backgroundColor: '#1F0106',
                            color: '#FFF',
                            hover: '#FFF'
                          }
                        }}
                      />
                    </div>

                  </Tab>

                </Tabs>
                <div className="own-trainee-progress-btn">
                  <button className="otp-btn">Compare</button>
                </div>
              </div>

            </div>

          </div> */}

        </div>

      </div>
    </div>
  )
}

export default TraineeProgress
