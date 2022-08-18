import React, { useState } from 'react'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Modal from "../../../Utilities/Popups/Dconfirmation";
import './Dashboard.css'

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Dasboard" />
        <div className="content-container">
          <button
            className="openModalBtn"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Open
          </button>

          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>

      </div>
    </div>
  )
}

export default Dashboard