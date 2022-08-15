import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Deletemodal from '../../../Utilities/Popups/popup';
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'



const Trainees = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <div className='main-container'>
      <SidebarR/>
      <div className='body-container'> 
          <HeaderR title="Trainees"/>
          <div className="content-container">
          <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      {show && <Deletemodal show/>}
          </div>
      </div>
    </div>
  )
}

export default Trainees