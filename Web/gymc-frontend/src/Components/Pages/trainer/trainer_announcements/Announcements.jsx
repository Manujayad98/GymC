import React, { useState, useEffect } from 'react'
import '../trainer_sidebar/Sidebar.css'
import SidebarO from '../trainer_sidebar/Sidebar'
import HeaderO from '../trainer_header/Header'
import '../trainer_announcements/Announcements.css'

import Button from '../../../Utilities/Form/Button';
import InputField from "../../../Utilities/Form/InputField";
import { Validators } from "../../../Utilities/Form/Validator/Validator";
import Table from '../../../Utilities/Tables/Table2';

import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import View from '../../../../images/Icons/eye-solid.svg'

const Announcements = () => {

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
    { id: "Topic", label: "Topic", numeric: false },
    { id: "Announcement", label: "Announcement", numeric: false }
  ]);
  const [announcementDetails] = useState([
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
    },
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
    },
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
    },
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
    },
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
    },
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
    },
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
    },
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
    },
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
    },
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
    },
    {
      Date_Time: "2022/08/15",
      Topic: "Gym Closure",
      Announcement:"Gym C will be closed on 2022/08/17 due to unavoidable circumstances",
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
        <div className="trainer-announcement-content-container">
         


          {/* start table */}
          <div className="trainer-announcement-table">

         
            <div className='trainer-announcement-table-card'>
              <Table
                rows={announcementDetails}
                headCells={announcementDetailsTableHead}
              />
            </div>
          </div>
          {/* end table */}


        </div>

      </div>
    </div>
  )
}

export default Announcements
