import React, { useState, useRef, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Deletemodal from '../../../Utilities/Popups/popup';
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Pic1 from '../../../../images/owner.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Snackbar from '../../../Utilities/Popups/messagepop'
import './Trainees.css'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import Checkin from '../../../../images/Icons/enter.png'
import Checkout from '../../../../images/Icons/exit.png'
import T1 from '../../../../images/t1.png'



/*const SnackbarType = {
  success: "success",
  fail: "fail",
};*/

const Trainees = () => {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  /*const snackbarRef = useRef(null);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);*/ // Snackbar reference and pop state
  const [trainerDetails] = useState([
    {
      TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TrainerID: "M001",
      TrainerName: "RMN Ruwan",
      PaymentType: "Daily",
      RegDate: "2021-10-24",
      Check: (
        <span>
          <span style={{ margin: "10px" }}><Button variant='outline-success' size='sm'><img src={Checkin} alt="" height={20} width={20} /></Button></span>
          <span><Button variant='outline-warning' size='sm'><img src={Checkout} alt="" height={20} width={20} /></Button></span>
        </span>
      ),
      Pay: (
        <Button variant='success'>Pay</Button>
      ),
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      TrainerImg: (<img src={T1} style={{ borderRadius: "50%" }} height={40} width={40}></img>),
      TrainerID: "M001",
      TrainerName: "RMN Ruwan",
      PaymentType: "Daily",
      RegDate: "2021-10-24",
      Check: (
        <span>
          <span style={{ margin: "10px" }}><Button variant='outline-success' size='sm'><img src={Checkin} alt="" height={20} width={20} /></Button></span>
          <span><Button variant='outline-warning' size='sm'><img src={Checkout} alt="" height={20} width={20} /></Button></span>
        </span>
      ),
      Pay: (
        <Button variant='success'>Pay</Button>
      ),
      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={View} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    }
  ]);

  const [trainerDetailsTableHead] = useState([
    { id: "TraineeImg", label: "", numeric: false },
    { id: "TraineeID", label: "TRAINEE ID", numeric: false },
    { id: "TrainerName", label: "TRAINEE NAME", numeric: false },
    { id: "PaymentType", label: "PAYMENT TYPE", numeric: false },
    { id: "RegDate", label: "REG ON", numeric: false },
    { id: "Check", label: "CHECK IN/OUT", numeric: false },
    { id: "Pay", numeric: false },
    { id: "Actions", numeric: false },
  ]);
  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Trainees" />
        <div className="content-container">
          <div>
            <Tabs defaultActiveKey={"NowIn"} id="uncontrolled-tab-example" className='mb-3'>
              <Tab eventKey={"NowIn"} title="Now In">
                <div className='content-row'>
                  <Card className='rec-train-card'>
                    <Card.Title> <img src={Pic1} alt="" /> </Card.Title>
                    <Card.Subtitle>
                      T000001
                    </Card.Subtitle>
                    <Card.Body>
                      Troy
                    </Card.Body>
                  </Card>
                  <Card className='rec-train-card'>
                    <Card.Title> <img src={Pic1} alt="" /> </Card.Title>
                    <Card.Subtitle>
                      T000001
                    </Card.Subtitle>
                    <Card.Body>
                      Troy
                    </Card.Body>
                  </Card>
                  <Card className='rec-train-card'>
                    <Card.Title> <img src={Pic1} alt="" /> </Card.Title>
                    <Card.Subtitle>
                      T000001
                    </Card.Subtitle>
                    <Card.Body>
                      Troy
                    </Card.Body>
                  </Card>
                </div>
              </Tab>
              <Tab eventKey={"due"} title="Due Check Out">
                <div className='content-row'>
                  <Card className='rec-train-card'>
                    <Card.Title> <img src={Pic1} alt="" /> </Card.Title>
                    <Card.Subtitle>
                      T000001
                    </Card.Subtitle>
                    <Card.Body>
                      Troy
                    </Card.Body>
                  </Card>
                  <Card className='rec-train-card'>
                    <Card.Title> <img src={Pic1} alt="" /> </Card.Title>
                    <Card.Subtitle>
                      T000001
                    </Card.Subtitle>
                    <Card.Body>
                      Troy
                    </Card.Body>
                  </Card>
                </div>
              </Tab>
            </Tabs>
          </div>

          <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '30px' }}>All</p>
          <form action="">
            <div className="filter-container">
              <div className="inputFields-container">
                <div className='searchbar-container'>
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Trainee ID</label>
                  </div>
                  <div class="input-group">
                    <button type="button" class="btn btn-dark" style={{ height: '38px', width: '50px' }}>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <div class="form-outline">
                      <input type="search" id="form1" class="form-control" placeholder='Search here' />
                    </div>
                  </div>

                </div>
                <div className="dropdown-container">
                  <div className="form-label-container">
                    <label class="form-label" for="form1">Due</label>
                  </div>
                  <select class="form-control form-control-sm" style={{ padding: '8px' }}>
                    <option> select 1</option>
                    <option> select 2</option>
                    <option> select 3</option>
                    <option> select 4</option>
                  </select>
                </div>
              </div>
              <div className="button-container">
                <button type="button" class="btn" style={{ backgroundColor: '#3DA2FF', width: '100px' }}>Add</button>
              </div>

            </div>
          </form>

          <Table
            rows={trainerDetails}
            headCells={trainerDetailsTableHead}
            tableName={"Trainers"}
          />
        </div>
      </div>
    </div>
  )
}

export default Trainees

/* 
      <div className='body-container'> 
          <HeaderR title="Trainees"/> 
          <div className="content-container">
          <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
          </Button>
          {show && <Deletemodal show/>}
          <Button variant='warning' onClick={() => {snackbarRef.current.show();}}>Alert</Button>
          <Snackbar ref={snackbarRef} message="Task Completed Successfully!" type={SnackbarType.success}/>
          </div>
      </div>
*/