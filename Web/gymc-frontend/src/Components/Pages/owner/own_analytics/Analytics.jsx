import React, { useState, useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import './Analytics.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Chart } from "react-google-charts";
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'

import { getExerciseTableDetails } from "../../../../services/ExerciseService";
import { getPaymentPlanTableDetails } from "../../../../services/PaymentService";
import { getCardData, getAnnualIncomeChartData, getThisMonthIncomeIncomeChartData } from "../../../../services/ChartDataService";


const Dashboard = () => {

  useEffect(() => {
    checkValidate();
    getExercises();
    getPaymentPlans();
    getCardDetails();
    getAnnualIncome();
    getThisMonthIncome();
  }, []);

  const [cardData, setCardData] = useState([]);
  const [cardDataObj, setCardDataObj] = useState([]);

  const [exercices, setExercises] = useState([]);
  const [paymentPlans, setPaymentPlans] = useState([]);
  const [annualIncome, setAnnualIncome] = useState({});
  const annualIncomeObj = [["Month", "Income"]];

  const [thisMonthIncome, setThisMonthIncome] = useState({});
  const thisMonthIncomeObj = [["Date", "Income"]];

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const getCardDetails = async () => {
    const res = await getCardData();
    console.log(res.data);
    setCardData(
      [res.data]
    );
  };
  console.log(cardData);
  const getAnnualIncome = async () => {
    const res = await getAnnualIncomeChartData();
    console.log(res.data);
    setAnnualIncome(
      [...res.data]
    );
  };

  const getThisMonthIncome = async () => {
    const res = await getThisMonthIncomeIncomeChartData();
    console.log(res.data);
    setThisMonthIncome(
      [...res.data]
    );
  };

  const rows1 = Object.values(annualIncome).map(
    (value) => (
      annualIncomeObj.push(
        [
          value.month,
          value.totalIncome
        ]
      )
    )
  )

  const rows2 = Object.values(thisMonthIncome).map(
    (value) => (
      thisMonthIncomeObj.push(
        [
          value.dateN,
          value.totalIncome
        ]
      )
    )
  )

  function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  // const rows3 = Object.values(cardData).map(
  //   (value) => (
  //     cardDataObj.push(
  //       [
  //         value.no_of_trainers,
  //         value.total_income,
  //         value.no_of_appointments,
  //         value.no_of_workouts
  //       ]
  //     )
  //   )
  // )


  const getExercises = async () => {
    const res = await getExerciseTableDetails();
    console.log(res.data);
    setExercises(
      [...res.data]
    );
    console.log(exercices);
  };

  const getPaymentPlans = async () => {
    const res = await getPaymentPlanTableDetails();
    console.log(res.data);
    setPaymentPlans(
      [...res.data]
    );
    console.log(paymentPlans);
  };


  console.log(cardData);

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

  //MONTHLY INCOME CHART
  const Monthlydata = [
    ["Element", "Income", { role: "style" }],
    ["week 1", 8.94, "#b87333"],
    ["week 2", 10.49, "silver"],
    ["week 3", 19.3, "gold"],
    ["week 4", 21.45, "color: #e5e4e2"],
  ];

  const [priceDetails] = useState([
    {
      PaymentID: "P0001",
      PaymentType: "Daily",
      Price: "550.00"
    },
    {
      PaymentID: "P0001",
      PaymentType: "Monthly - Personal",
      Price: "550.00"
    },
    {
      PaymentID: "P0001",
      PaymentType: "Monthly - Nonpersonal",
      Price: "550.00"
    },
  ]);


  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Summary" />
        <div className="content-container">
          {/* <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3">

            <Tab eventKey="home" title="Gym Progress" > */}
          {cardData.map((cardData) => (

            <div className='own-analytics-card-container'>

              <div className='own-analytics-card1 analytics-cards'>

                <div className='own-analytics-card-content'>
                  <div className='staffID'>No of Trainers</div>
                  <div className='staffName'>{cardData.no_of_trainers}</div>
                </div>

              </div>

              <div className='own-analytics-card1 analytics-cards'>

                <div className='own-analytics-card-content'>
                  <div className='staffID'>Total Income</div>
                  <div className='staffName'>LKR {cardData.total_income.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>
                </div>

              </div>
              <div className='own-analytics-card1 analytics-cards'>

                <div className='own-analytics-card-content'>
                  <div className='staffID'>No of Appointments</div>
                  <div className='staffName'>{cardData.no_of_appointments}</div>
                </div>

              </div>
              <div className='own-analytics-card1 analytics-cards'>

                <div className='own-analytics-card-content'>
                  <div className='staffID'>No of Workouts</div>
                  <div className='staffName'>{cardData.no_of_workouts}</div>
                </div>

              </div>


            </div>
          ))}
          <div className='own-analytics-chart-table-container'>

            <div className='own-analytics-chart-container'>
              <div className='own-analytics-container-head'>Annual Income</div>
              <div className='own-analytics-card '>
                {/* <BarChart data={ChartData} /> */}
                <Chart chartType="ColumnChart" width="90%" height="400px" data={annualIncomeObj} />
              </div>
            </div>

            <div className='own-analytics-chart-container'>
              <div className='own-analytics-container-head'>This Month's Income</div>
              <div className='own-analytics-card '>
                {/* <BarChart data={ChartData} /> */}
                <Chart
                  chartType="LineChart"
                  width="100%"
                  height="400px"
                  data={thisMonthIncomeObj}
                // options={
                //   hAxis = {
                //     direction: -1,
                //     slantedText: true, /* Enable slantedText for horizontal axis */
                //     slantedTextAngle: 90 /* Define slant Angle */
                //   }
                // }
                />
              </div>
            </div>
          </div>
          <div className='own-analytics-chart-table-container'>

            <div className='own-analytics-table-container'>
              <div className='own-analytics-container-head'>Available Excercises</div>
              <div className='own-analytics-card1'>

                <MaterialTable
                  title="Exercices"
                  columns={[
                    { title: "Exercise ID", field: "exercise_id" },
                    { title: "Exercise Name", field: "exercise_name" },
                    { title: "Primary Muscle", field: "primary_muscle" },
                    { title: "Secondary Muscle", field: "secondary_muscle" },
                  ]}
                  icons={TableIcons}
                  data={exercices}
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

            <div className='own-analytics-table-container'>
              <div className='own-analytics-container-head'>Available Payment Plans</div>
              <div className='own-analytics-card1'>

                <MaterialTable
                  title="Payment Plans"
                  columns={[
                    { title: "Payment ID", field: "plan_id" },
                    { title: "Payment Type", field: "type" },
                    { title: "Price", field: "amount" },
                  ]}
                  icons={TableIcons}
                  data={paymentPlans}
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


          {/* </Tab> */}
          {/* <Tab eventKey="profile" title="Reports">
              <div className='Analytics-dropdown'>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Report Type</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select </option>
                    <option> Income Report</option>
                    <option> Trainer Report</option>
                    <option> Trainee Report</option>
                  </select>
                </div>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Duration</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select </option>
                    <option> Yearly</option>
                    <option> Monthly</option>
                    <option> Daily</option>
                  </select>
                </div>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Time</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select </option>
                    <option> January</option>
                    <option> February</option>
                    <option> March</option>
                    <option> April</option>
                  </select>
                </div>

                <div className="dropdown-container">
                  <div className="own-read-btn">
                    <button className="report-generate-button">Generate</button>
                  </div>
                </div>
              </div>
            </Tab> */}

          {/* </Tabs> */}
        </div>

      </div>
    </div >
  )
}

export default Dashboard