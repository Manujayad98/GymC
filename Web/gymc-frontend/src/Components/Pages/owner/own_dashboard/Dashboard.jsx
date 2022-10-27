import React, { useState, useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'

import Pic1 from '../../../../images/owner.png'
import trainer1 from '../../../../images/owner/tr1.png'
import trainer2 from '../../../../images/owner/tr2.png'
import trainer3 from '../../../../images/owner/tr3.png'
import trainer4 from '../../../../images/owner/tr4.png'
import trainer5 from '../../../../images/owner/tr5.png'
import trainee1 from '../../../../images/owner/te1.png'
import trainee2 from '../../../../images/owner/te2.png'
import trainee3 from '../../../../images/owner/te3.png'
import trainee4 from '../../../../images/owner/te4.png'
import trainee5 from '../../../../images/owner/te5.png'
import Image from 'react-random-image'
import Avatar from 'react-avatar';

// import BarChart from '../../../Utilities/Charts/BarChart'
// import Table from '../../../Utilities/Tables/Table2'
// import Edit from '../../../../images/Icons/pen-solid.svg'
import './Dashboard.css'
import { Chart } from "react-google-charts";
// import { width } from '@mui/system'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

import { getAnnualIncomeChartData } from "../../../../services/ChartDataService";
import { getTodaysTrainers } from "../../../../services/StaffService";
import { getTodaysTrainees, getTodayWorkoutList } from "../../../../services/TraineeService";


const Dashboard = () => {

  useEffect(() => {
    checkValidate();
    getAnnualIncome();
    getTodayAvailableTrainers();
    getTodayAvailableTrainees();
    getTodayWorkouts();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [annualIncome, setAnnualIncome] = useState({});
  const annualIncomeObj = [["Month", "Income"]];

  const [todayTrainers, setTodayTrainers] = useState({});
  const [todayTrainees, setTodayTrainees] = useState({});
  const [todayWorkouts, setTodayWorkouts] = useState({});

  const getAnnualIncome = async () => {
    const res = await getAnnualIncomeChartData();
    console.log(res.data);
    setAnnualIncome(
      [...res.data]
    );
  };

  const getTodayAvailableTrainers = async () => {
    const res = await getTodaysTrainers();
    console.log(res.data);
    setTodayTrainers(
      [...res.data]
    );
  };

  const getTodayAvailableTrainees = async () => {
    const res = await getTodaysTrainees();
    console.log(res.data);
    setTodayTrainees(
      [...res.data]
    );
  };

  const getTodayWorkouts = async () => {
    const res = await getTodayWorkoutList();
    console.log(res.data);
    setTodayWorkouts(
      [...res.data]
    );
  };

  const rows = Object.values(annualIncome).map(
    (value) => (
      annualIncomeObj.push(
        [
          value.month,
          value.totalIncome
        ]
      )
    )
  )
  // obj.push(rows)
  // console.log(obj);

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
        <HeaderO title="Dashboard" />
        <div className="content-container">

          <div className='own-dashboard-titles'>Today's Available Trainers</div>

          <div className='own-dashboard-card-container'>

            {Object.values(todayTrainers).map((trainer) => (
              // <div className='own-dashboard-card own-dashboard-profile-cards'>
              //   <div className='own-dashboard-card-img-container'>
              //     <img src={trainer5} className='owner-dashboard-images' alt="" />
              //   </div>
              //   <div className='own-dashboard-card-content'>
              //     <div className='staffID'>{trainer.trainer_id}</div>
              //     <div className='staffName'>{trainer.full_name}</div>
              //   </div>
              // </div>
              <div className='rec-train-card'>
                <div className='rec-dashboard-card-img-container'>
                  <img src={trainer5} className='owner-dashboard-images' alt="" />
                </div>
                <div className='traineeID'>{trainer.trainer_id}</div>
                <div className='traineeName'>{trainer.full_name}</div>
              </div>
            ))}

          </div>

          <div className='own-dashboard-titles'>Today's Available Trainees</div>

          <div className='own-dashboard-card-container'>

            {Object.values(todayTrainees).map((trainee) => (
              // <div className='own-dashboard-card own-dashboard-profile-cards'>
              //   <div className='own-dashboard-card-img-container'>
              //     {/* <img src={trainee5} className='owner-dashboard-images' alt="" /> */}
              //     <Image width={100} height={100} className='owner-dashboard-images' />
              //     {/* <Avatar name="Foo Bar" /> */}
              //   </div>
              //   <div className='own-dashboard-card-content'>
              //     <div className='staffID'>{trainee.trainee_id}</div>
              //     <div className='staffName'>{trainee.full_name}</div>
              //   </div>
              // </div>

              <div className='rec-train-card'>
                <div className='rec-dashboard-card-img-container'>
                  <img className='recept-dashboard-images' src={Pic1} alt="" />
                </div>
                <div className='traineeID'>{trainee.trainee_id}</div>
                <div className='traineeName'>{trainee.full_name}</div>
              </div>
            ))}

          </div>

          <div className='own-dashboard-chart-table-container'>

            <div className='own-dashboard-chart-container'>
              <div className='own-dashboard-container-head'>Annual Income</div>
              <div className='own-dashboard-card own-dashboard-chart-cards'>
                {/* <BarChart data={ChartData} /> */}
                <Chart chartType="ColumnChart" width="100%" height="400px"
                  data={annualIncomeObj} />
                {/* <Chart chartType="ColumnChart" width="100%" height="400px" data={chartdata} /> */}
              </div>
            </div>

            <div className='own-dashboard-table-container'>
              <div className='own-dashboard-container-head'>Today's Workouts</div>
              <div className='own-dashboard-card own-dashboard-table-cards'>
                {/* <Table
                  rows={workoutDetails}
                  headCells={workoutDetailsTableHead}
                /> */}
                <MaterialTable
                  title="Workouts"
                  columns={[
                    { title: "Start Time", field: "start_time" },
                    { title: "End Time", field: "end_time" },
                    { title: "Trainee Name", field: "trainee_name" },
                    { title: "Trainer Name", field: "trainer_name" },

                  ]}
                  icons={TableIcons}
                  data={todayWorkouts}

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
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}


// const AnnualIncomeChart = (props) => {
//   return(
//     <>

//     </>
//   )
// }

export default Dashboard

