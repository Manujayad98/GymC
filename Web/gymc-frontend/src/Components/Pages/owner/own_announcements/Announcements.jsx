import React, { useState } from 'react'
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

const Dashboard = () => {

  const [requestData, setState] = useState({
    title:'',
    note:''
  });
  const [announcementDetailsTableHead] = useState([
    { id: "Date_Time", label: "Date & Time", numeric: false },
    { id: "Topic", label: "Topic", numeric: false },
    { id: "Note", label: "Note", numeric: false },
    { id: "Actions", label: "Actions", numeric: false }
  ]);
  const [announcementDetails] = useState([
    {
      Date_Time: "2022/08/15 09.30 AM",
      Topic: "Center Closure",
      Note: "Fitness center is closed on 20 th August 2022",
      Actions: (
        <span >
            <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
            <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>

        </span >
    ),
    },
    {
      Date_Time: "2022/08/15 09.30 AM",
      Topic: "Center Closure",
      Note: "Fitness center is closed on 20 th August 2022",
      Actions: (
        <span >
            <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
            <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>

        </span >
    ),
    },
    {
      Date_Time: "2022/08/15 09.30 AM",
      Topic: "Center Closure",
      Note: "Fitness center is closed on 20 th August 2022",
      Actions: (
        <span >
            <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
            <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>

        </span >
    ),
    },
    {
      Date_Time: "2022/08/15 09.30 AM",
      Topic: "Center Closure",
      Note: "Fitness center is closed on 20 th August 2022",Actions: (
        <span >
            <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
            <span style={{ paddingRight: "20px" }}><img src={Trash} alt="" height={20} width={20} /></span>

        </span >
    ),
    },
    {
      Date_Time: "2022/08/15 09.30 AM",
      Topic: "Center Closure",
      Note: "Fitness center is closed on 20 th August 2022",Actions: (
        <span >
            <span style={{ paddingRight: "20px" }}><img src={Edit} alt="" height={20} width={20} /></span>
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
          <div className="own-dashboard-chart-table-container">
            <div className="own-annoucement-form-container">
              <div className='own-dashboard-container-head'>New Annoucement</div>
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
                      <br></br><br /><br /><br />

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
            </div>
            <div className='own-dashboard-table-container'>
              <div className='own-dashboard-container-head'>All Annoucements</div>
              <div className='own-dashboard-card table-cards'>
                <Table
                  rows={announcementDetails}
                  headCells={announcementDetailsTableHead}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard