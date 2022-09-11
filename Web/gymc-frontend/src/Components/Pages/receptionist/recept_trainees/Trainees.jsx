import React, { useState, useRef, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import DeleteModal from '../../../Utilities/Popups/DeletionModal'
import CheckinModal from '../../../Utilities/Popups/Checkinmodal';
import CheckoutModal from '../../../Utilities/Popups/Checkoutmodal';
import NowinModal from '../../../Utilities/Popups/NowinModal';
import DuecheckModal from '../../../Utilities/Popups/DuecheckoutModal';
import PaymentModal from '../../../Utilities/Popups/paymentModal';
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Pic1 from '../../../../images/owner.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Trainees.css'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faSearch } from '@fortawesome/free-solid-svg-icons'
import Table from '../../../Utilities/Tables/Table1'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'
import Checkin from '../../../../images/Icons/enter.png'
import Checkout from '../../../../images/Icons/exit.png'
import T1 from '../../../../images/t1.png'
import { Link } from 'react-router-dom'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'
import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { getTrainees, deleteTrainee } from "../../../../services/UserService";


const Trainees = () => {


  useEffect(() => {
    checkValidate();
    getAllTrainees();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };


  const [selectedUserData, setSelectedUserData] = useState({});
  const [users, setAllUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [checkinmodal, opencheckin] = useState(false)
  const [checkoutmodal, opencheckout] = useState(false)
  const [nowinmodal, opennowin] = useState(false)
  const [duecmodal, openduec] = useState(false)
  const [paymentModal, openpaymentModal] = useState(false)
  const [msg, setMsg] = useState("");
  const [popup, setPopUp] = useState("");

  const getAllTrainees = async () => {
    const res = await getTrainees();
    console.log(res.data);
    setAllUsers(
        [...res.data]
    );
    console.log(users);
};

const closePopUp = () => {
  setPopUp("");
};

const deleteSelectedTrainee = () => {
  console.log("deleted " + selectedUserData.traineeID);
  deleteTrainee(selectedUserData.traineeID)
      .then((response) => {
          if (response.status === 200 && response.data == 1) {
              window.location.href = "/Ausers";
              // evt.preventDefault();
              toast.success("User has deleted !");
          } else {
              toast.error("Failed !!!");
          }
      })
      .catch((err) => {
          if (err && err.response) {
              console.log(err.message);
              toast.error("Failed !!!");
          }
      });
  setPopUp("");
};
  
  const [trainerDetailsTableHead] = useState([
    { id: "TraineeImg", label: "", numeric: false },
    { id: "traineeID", label: "TRAINEE ID", numeric: false },
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
              <div className='rec-trainee-titles'> Trainees Today</div>
                <div className='rec-trainee-profile-card-container'>
                    <div onClick={() => opennowin(true)} className='rec-train-card'>
                      <div className='rec-dashboard-card-img-container'>
                        <img className='recept-dashboard-images' src={Pic1} alt="" />
                      </div>
                      <div className='traineeID'>S0001</div>
                      <div className='traineeName'>Manujaya Dasanayaka</div>
                    </div>
                    <div onClick={() => opennowin(true)} className='rec-train-card'>
                      <div className='rec-dashboard-card-img-container'>
                        <img className='recept-dashboard-images' src={Pic1} alt="" />
                      </div>
                      <div className='traineeID'>S0001</div>
                      <div className='traineeName'>Manujaya Dasanayaka</div>
                    </div>
                    <div onClick={() => opennowin(true)} className='rec-train-card'>
                      <div className='rec-dashboard-card-img-container'>
                        <img className='recept-dashboard-images' src={Pic1} alt="" />
                      </div>
                      <div className='traineeID'>S0001</div>
                      <div className='traineeName'>Manujaya Dasanayaka</div>
                    </div>
                    <div onClick={() => opennowin(true)} className='rec-train-card'>
                      <div className='rec-dashboard-card-img-container'>
                        <img className='recept-dashboard-images' src={Pic1} alt="" />
                      </div>
                      <div className='traineeID'>S0001</div>
                      <div className='traineeName'>Manujaya Dasanayaka</div>
                    </div>
                    <div onClick={() => opennowin(true)} className='rec-train-card'>
                      <div className='rec-dashboard-card-img-container'>
                        <img className='recept-dashboard-images' src={Pic1} alt="" />
                      </div>
                      <div className='traineeID'>S0001</div>
                      <div className='traineeName'>Manujaya Dasanayaka</div>
                    </div>
                  
                </div>
              
          </div>

          <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '30px' }}>All</p>             
              <div className="button-container">
                <Link to='/RaddTrainee'>
                  <button type="button" class="btn" style={{ backgroundColor: '#3DA2FF', width: '100px' }}>Add</button>
                </Link>
              </div>
                      <div className="table-div">
                        <MaterialTable
                            title="Trainees"
                            columns={[
                                { title: "", field: "TraineeImg" },
                                { title: "TRAINEE ID", field: "trainee_id" },
                                { title: "TRAINEE NAME", field: "full_name" },
                                { title: "PAYMENT TYPE", field: "PaymentType" },
                                { title: "REG ON", field: "registered_date" },
                            ]}
                            icons={TableIcons}
                            data={users}
                            actions={[
                                {
                                    icon: () => {
                                        return (

                                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} onClick={() => setOpenModal(true)} alt="" height={20} width={20} /></span>
                                        );
                                    },
                                    onClick: (event, rowData) => {
                                      setSelectedUserData(rowData);
                                        {
                                            setPopUp("delete");
                                        }
                                        setMsg(
                                            rowData.traineeID
                                        );
                                    },
                                },
                                rowData => ({

                                  icon: () => {
                                      return (

                                          <button
                                              type="button"
                                              className="btn mt-0"
                                              style={{
                                                  backgroundColor: "#32E04E",
                                                  border: "none",
                                                  // marginRight: "2px",
                                              }}
                                          >
                                              Pay
                                          </button>
                                      );
                                  },
                                  onClick: (event, rowData) => {
                                      setSelectedUserData(rowData);
                                      {
                                          setPopUp("pay");
                                      }
                                      setMsg(
                                          rowData.trainee_id
                                      );
                                  },
                              }),
                              rowData => ({

                                icon: () => {
                                    return (

                                      <span style={{ paddingRight: "20px", cursor: 'pointer' }}><Button variant='outline-success' size='sm'><img src={Checkin} onClick={() => setOpenModal(true)} alt="" height={20} width={20} /></Button></span>

                                    );
                                },
                                onClick: (event, rowData) => {
                                    setSelectedUserData(rowData);
                                    {
                                        setPopUp("checkin");
                                    }
                                    setMsg(
                                        rowData.trainee_id
                                    );
                                },
                            }),
                            rowData => ({

                              icon: () => {
                                  return (

                                    <span style={{ paddingRight: "20px", cursor: 'pointer' }}><Button variant='outline-warning' size='sm'><img src={Checkout} onClick={() => setOpenModal(true)} alt="" height={20} width={20} /></Button></span>

                                  );
                              },
                              onClick: (event, rowData) => {
                                  setSelectedUserData(rowData);
                                  {
                                      setPopUp("checkout");
                                  }
                                  setMsg(
                                      rowData.trainee_id
                                  );
                              },
                          }),
                                
                            ]}
                            options={{
                                headerStyle: {
                                    backgroundColor: '#1F0106',
                                    color: '#FFF',
                                    hover: '#FFF'
                                }
                            }}
                        />
                    </div>

          <div>
          {popup === "delete" && (
                <DeleteModal
                    msg={msg}
                    closePopUp={closePopUp}
                    handleSubmit={deleteSelectedTrainee}
                />
            )}

            {popup === "pay" && (
                <PaymentModal
                    msg={msg}
                    closePopUp={closePopUp}
                    open={paymentModal}
                />
            )}

            {popup === "checkin" && (
                <CheckinModal
                    msg={msg}
                    closePopUp={closePopUp}
                    open={checkinmodal}
                />
            )}

            {popup === "checkout" && (
                <CheckinModal
                    msg={msg}
                    closePopUp={closePopUp}
                    open={checkoutmodal}
                />
            )}

            {/* <DeleteModal open={openModal} onClose={() => setOpenModal(false)} /> */}
            {/* <CheckinModal open={checkinmodal} onClose={() => opencheckin(false)} /> */}
            {/* <CheckoutModal open={checkoutmodal} onClose={() => opencheckout(false)} /> */}
            <NowinModal open={nowinmodal} onClose={() => opennowin(false)} />
            <DuecheckModal open={duecmodal} onCloseD={() => openduec(false)} />
            {/* <PaymentModal open={paymentModal} onClose={() => openpaymentModal(false)} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trainees