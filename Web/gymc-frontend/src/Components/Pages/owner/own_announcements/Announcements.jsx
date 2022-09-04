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

const OAnnouncements = () => {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [requestData, setState] = useState({
    title: '',
    note: ''
  });
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
  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <HeaderO title="Announcements" />
        <div className="content-container">
          <div className="own-announcement-content-container">
            <div className="own-announcement-form">
              {/* start form */}
              {/* <div className='own-dashboard-container-head'>New Annoucement</div> */}
              <h1>New Announcement</h1>
              <div className="form-container">

                <div className="form-inputs">

                  <div className="form-row">
                    <div className="form-col1">
                      <InputField
                        value={requestData.title}
                        type='text'
                        label="Topic"
                        placeholder='Type'
                        validators={[
                          { check: Validators.required, message: 'This field is required' }
                        ]}
                        onChange={handleChange('title')} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col1">
                      <InputField
                        value={requestData.note}
                        label='Note'
                        type='textarea'
                        placeholder='Type'
                        validators={[
                          { check: Validators.required, message: 'This field is required' }
                        ]}
                        onChange={handleChange('note')} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col1"></div>
                    <div className="form-col2">
                    </div>
                    <Button
                      onClick={handleClick}
                      value='Add' />
                  </div>
                </div>
              </div>
              {/* end form */}
            </div>

            {/* start table */}
            <div className="own-announcement-table">

              <h1>All Announcements</h1>
              <div className='own-announcement-table-card'>
                {/* <Table
                  rows={announcementDetails}
                  headCells={announcementDetailsTableHead}
                /> */}
                <div className="table-div">
                  <MaterialTable
                    title="System Users"
                    columns={[
                      { title: "Date", field: "Date" },
                      { title: "Announcement", field: "Announcement" },

                    ]}
                    icons={TableIcons}
                    data={announcementDetails}
                    actions={[
                      {
                        icon: () => {
                          return (
                            <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Trash} onClick={() => setOpenModal(true)} alt="" height={20} width={20} /></span>
                          );
                        },
                        onClick: (event, rowData) => {

                        },
                      },

                    ]}
                    options={{
                      headerStyle: {
                        backgroundColor: '#1F0106',
                        color: '#FFF',
                        hover: '#FFF'
                      }
                    }}
                  />
                  <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
                </div>
              </div>
            </div>
            {/* end table */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OAnnouncements
