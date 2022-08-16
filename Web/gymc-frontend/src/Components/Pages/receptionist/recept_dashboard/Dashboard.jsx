import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Pic1 from '../../../../images/owner.png'
import Table from '../../../Utilities/Tables/Table2'
import Modal from "../../../Utilities/Popups/Dconfirmation";
import './Dashboard.css'
import { margin } from '@mui/system'



const Dashboard = () => {
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

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='main-container'>
      <SidebarR/>
      <div className='body-container'> 
          <HeaderR title="Dashboard"/>
          <div className="content-container">
              <div className='content-row'>
                <Card className='rec-dashboard-card' >
                  <Card.Body>
                  <Card.Title>Payments Due</Card.Title>
                  <button className='btn btn-default btn-circle btn-xl'>3</button>
                  </Card.Body>
                </Card>
                <Card className='rec-dashboard-card' style={{margin:'2%'}}>
                  <Card.Body>
                  <Card.Title>Trainees Now In</Card.Title>
                  <button className='btn btn-default btn-circle btn-xl'>2</button>
                  </Card.Body>
                </Card>
              </div>
              <div className='content-row'>
                <Card className='rec-dashboard-card'>
                  <Card.Body>
                  <Card.Title>Trainers today</Card.Title>
                  <div className='content-row'>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                      <img src={Pic1} alt="" />
                      <Card.Subtitle className='card-subtitle'>Louis</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                      <img src={Pic1} alt="" />
                      <Card.Subtitle className='card-subtitle'>John</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                      <img src={Pic1} alt="" />
                      <Card.Subtitle className='card-subtitle'>Kunst</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                      <img src={Pic1} alt="" />
                      <Card.Subtitle className='card-subtitle'>Trump</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                      <img src={Pic1} alt="" />
                      <Card.Subtitle className='card-subtitle'>Lahiru</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                      <img src={Pic1} alt="" />
                      <Card.Subtitle className='card-subtitle'>Louianna</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                      <img src={Pic1} alt="" />
                      <Card.Subtitle className='card-subtitle'>Trump</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                      <img src={Pic1} alt="" />
                      <Card.Subtitle className='card-subtitle'>Lahiru</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card className='rec-dashboard-pic-card'>
                      <Card.Body>
                      <img src={Pic1} alt="" />
                      <Card.Subtitle className='card-subtitle'>Louianna</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </div>
                  </Card.Body>
                </Card>
                <Card className='rec-dashboard-card alt' style={{margin:'2%'}}>
                  <Card.Body>
                  <Card.Title>Upcoming Appointments</Card.Title>
                      <div className='table-cards'>
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
  )
}

export default Dashboard

/*            <button className="openModalBtn" onClick={() => {setModalOpen(true);}}>Open</button>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            <button>click</button>*/
