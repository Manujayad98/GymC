import React, { useState, useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import T1 from '../../../../images/t1.png'
import Pic1 from '../../../../images/owner.png'
import Card from 'react-bootstrap/Card'
// import Collapsible from 'react-collapsible';
import { Link, useParams } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Chart } from "react-google-charts";
import './TraineeProgress.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import { getTraineeProgressChart } from "../../../../services/WorkoutService";

const TraineeProgress = () => {

  const { id } = useParams();

  useEffect(() => {
    checkValidate();
    getTraineeProgress();
  }, []);

  const checkValidate = async () => {
    console.log(id);
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [traineeProgress, setTraineeProgress] = useState({});
  const annualIncomeObj = [["Month", "Income"]];
  const getTraineeProgress = async () => {
    const res = await getTraineeProgressChart(id);
    console.log(res.data);
    setTraineeProgress(
      [...res.data]
    );
  };



  const LineData = [
    ['x', 'Biceps', 'Forearm', 'Chest', 'Thighs', 'Hips'],
    ['2022-10-20', 12, 25, 12, 15, 20],
    ['2022-10-21', 10, 15, 24, 16, 27],
    ['2022-10-22', 23, 15, 14, 14, 18],
    ['2022-10-23', 17, 29, 15, 22, 28],
    ['2022-10-24', 18, 10, 14, 17, 25],
    ['2022-10-25', 29, 25, 11, 21, 33],
    ['2022-10-26', 11, 23, 16, 17, 44],
    ['2022-10-27', 27, 19, 23, 24, 26],
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
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Trainee Progress" />
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
