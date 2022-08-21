import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Pic1 from '../../../../images/owner.png'
import gihanpic from "../../../../images/receptionistinterim/gihan.png"
import kalindupic from "../../../../images/receptionistinterim/piyath.png"
import piyathpic from "../../../../images/receptionistinterim/kalindu.png"
import trumppic from "../../../../images/receptionistinterim/trump.png"
import lahirupic from "../../../../images/receptionistinterim/lahiru.png"
import lelanipic from "../../../../images/receptionistinterim/lelani.png"

import Table from '../../../Utilities/Tables/Table2'
import './Dashboard.css'
import { margin } from '@mui/system'



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

  const [workoutDetailsTableHead] = useState([
    { id: "Time", label: "Time", numeric: false },
    { id: "TrainerName", label: "Trainer Name", numeric: false },
    { id: "TraineeName", label: "Trainee Name", numeric: false }
  ]);

  const [workoutDetails] = useState([
    {
      Time: "09.30 AM",
      TrainerName: "Gihan Sekara",
      TraineeName: "Kasun Perera"
    },
    {
      Time: "09.30 AM",
      TrainerName: "Piyath Sandaruwan",
      TraineeName: "Rasul Silve"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Gihan Sekara",
      TraineeName: "Denuwan Wijesekara"
    },
    {
      Time: "10.30 AM",
      TrainerName: "Piyath Sandaruwan",
      TraineeName: "Natasha Perera"
    },
    {
      Time: "12.30 PM",
      TrainerName: "Kalindu Sampath",
      TraineeName: "Rajeewa Senevirathne"
    },
    {
      Time: "01.00 PM",
      TrainerName: "Piyath Sandaruwan",
      TraineeName: "Pasindu Pathberiya"
    },
    {
      Time: "2.30 PM",
      TrainerName: "Kalindu Sampath",
      TraineeName: "Dominic Gape"
    }
  ]);

  
  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Dashboard" />
        <div className="rec-content-container" >
          <div className='rec-split rec-left'>
            <div className='rec-content-row'>
              <Card className='rec-dashboard-card' >
                <Card.Body>
                  <Card.Title>Payments Due</Card.Title>
                  <button className='btn btn-default btn-circle btn-xl'>3</button>
                </Card.Body>
              </Card>
              <Card className='rec-dashboard-card'>
                <Card.Body>
                  <Card.Title>Trainees Now In</Card.Title>
                  <button className='btn btn-default btn-circle btn-xl'>2</button>
                </Card.Body>
              </Card>
              <Card className='rec-trainerstoday-card'>
                <Card.Body>
                  <Card.Title>Trainers today</Card.Title>
                  <div className='rec-content-row'>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                        <img src={gihanpic} height={70} alt="" />
                        <Card.Subtitle className='rec-card-subtitle'>Gihan</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                        <img src={kalindupic} height={70}  alt="" />
                        <Card.Subtitle className='rec-card-subtitle'>Kalindu</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                        <img src={piyathpic} height={70}  alt="" />
                        <Card.Subtitle className='rec-card-subtitle'>Piyath</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                        <img src={trumppic} height={70} alt="" />
                        <Card.Subtitle className='rec-card-subtitle'>Trump</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                        <img src={lahirupic} height={70} alt="" />
                        <Card.Subtitle className='rec-card-subtitle'>Lahiru</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                        <img src={lelanipic} height={70} alt="" />
                        <Card.Subtitle className='rec-card-subtitle'>Lelani</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className='rec-split rec-right'>
            <div className='rec-content-row'>

              <Card className='rec-alt-card' style={{ margin: '2%' }}>
                <Card.Body>
                  <Card.Title>Upcoming Appointments</Card.Title>
                  <div className='rec-table-cards'>
                    <Table
                      rows={workoutDetails}
                      headCells={workoutDetailsTableHead}
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard


