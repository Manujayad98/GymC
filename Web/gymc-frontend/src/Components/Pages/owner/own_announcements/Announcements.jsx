import React, { useState, useEffect } from 'react'
import '../own_sidebar/Sidebar.css'
import SidebarO from '../own_sidebar/Sidebar'
import HeaderO from '../own_header/Header'
// import '../own_dashboard/Dashboard.css'
import '../own_announcements/Annoucements.css'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Table from '../../../Utilities/Tables/Table2';

import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import DeleteModal from '../../../Utilities/Popups/DeletionModal'
import { getProfile } from "../../../../services/UserService";
import { fetchUserData } from "../../../../services/AuthenticationService";
import { addAnnouncement, getAllAnnouncements } from "../../../../services/UserService"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OAnnouncements = () => {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    checkValidate();
    userProfileData();
    getAllAnnouncementList();
  }, []);

  const [userdata, setData] = useState([]);
  const [profile, setProfile] = useState({
    user_id: "",
    user_name: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    address: "",
    gender: "",
    nic: "",
  });
  const [click, setClick] = useState(false);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const userProfileData = async () => {
    const res = await fetchUserData();
    console.log(res.data.userName);
    setData(res.data);
    // setUserRoles(res.data.userName);
    console.log(res.data.userName);
    getUserProfileData(res.data.userName);
    // console.log(res.data);
  };

  const getUserProfileData = async (userName) => {
    console.log('res1');
    const res = await getProfile(userName);
    console.log(res.data);
    setProfile(res.data);
  };
  const [requestData, setState] = useState({
    topic: '',
    description: '',
    staffId: profile.user_id
  });
  requestData.staffId = profile.user_id
  console.log(requestData.staffId);

  const [allAnnouncements, setAllAnnouncements] = useState([]);

  const getAllAnnouncementList = async (event) => {
    const res = await getAllAnnouncements();
    console.log(res.data);
    setAllAnnouncements(
      [...res.data]
    );
  }

  const [announcementDetailsTableHead] = useState([
    { id: "Date", label: "Date", numeric: false },
    { id: "Announcement", label: "Announcement", numeric: false },
    { id: "Actions", label: "Actions", numeric: false }
  ]);
  const [announcementDetails] = useState([
    {
      Date: "2022/08/15",
      Announcement: "Center Closure",

      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      Date: "2022/08/15",
      Announcement: "Center Closure",

      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      Date: "2022/08/15",
      Announcement: "Center Closure",

      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      Date: "2022/08/15",
      Announcement: "Center Closure",

      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      Date: "2022/08/15",
      Announcement: "Center Closure",

      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      Date: "2022/08/15",
      Announcement: "Center Closure",

      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },
    {
      Date: "2022/08/15",
      Announcement: "Center Closure",

      Actions: (
        <span >
          <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>
        </span >
      ),
    },

  ]);

  const handleChange = (key) => (value) => {
    setState({
      ...requestData,
      [key]: value
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    alert('Button Clicked');
  };
  const addAnnouncementHere = (event) => {
    // event.preventDefault();
    if (!requestData.topic || !requestData.description) {
      console.log('Please fill out the form correctly');
      setClick({ click: true, })
      toast.warning('Please fill out the form correctly');
    } else {
      console.log(requestData);
      addAnnouncement(requestData)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            toast.success("successfully added!!!");
            window.location.href = "/Oannouncements";
          }
        })
        .catch((err) => {
          if (err && err.response) {
            console.log(err);
            toast.error('Failed!!!');
          }
        });
    }
  };

  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Announcements" />
        <div className="content-container">
          <div className="own-announcement-content-container">
            <div className="own-announcement-form">
              <h1>New Announcement</h1>
              <div className="form-container">

                <div className="form-inputs">

                  <div className="form-row">
                    <div className="form-col1">
                      <InputField
                        value={requestData.topic}
                        type='text'
                        label="Topic"
                        placeholder='Type'
                        validators={[
                          { check: Validators.required, message: 'This field is required' }
                        ]}
                        onChange={handleChange('topic')} />
                      {!requestData.topic && click && <span className='text-danger'>This Field is required</span>}

                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col1">
                      <InputField
                        value={requestData.description}
                        label='Note'
                        type='textarea'
                        placeholder='Type'
                        validators={[
                          { check: Validators.required, message: 'This field is required' }
                        ]}
                        onChange={handleChange('description')} />
                      {!requestData.description && click && <span className='text-danger'>This Field is required</span>}

                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col1"></div>
                    <div className="form-col2">
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <button className="own_next_workout-btn" onClick={addAnnouncementHere}> Add </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="own-announcement-table">

              <h1>All Announcements</h1>
              <div className='own-announcement-table-card'>
                <div className="table-div">
                  <MaterialTable
                    title="System Users"
                    columns={[
                      { title: "ID", field: "id", hidden: true, },
                      { title: "Author", field: "author" },
                      { title: "Title", field: "title" },
                      { title: "Note", field: "note" },
                    ]}
                    icons={TableIcons}
                    data={allAnnouncements}
                    options={{
                      headerStyle: {
                        backgroundColor: '#1F0106',
                        color: '#FFF',
                        hover: '#FFF'
                      }
                    }}
                  />
                  {/* <DeleteModal open={openModal} onClose={() => setOpenModal(false)} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div >
  )
}

export default OAnnouncements
