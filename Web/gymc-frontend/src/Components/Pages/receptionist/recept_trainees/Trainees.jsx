import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Deletemodal from '../../../Utilities/Popups/popup';
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import Snackbar from '../../../Utilities/Popups/messagepop'

/*const SnackbarType = {
  success: "success",
  fail: "fail",
};*/

const Trainees = () => {
  /*const snackbarRef = useRef(null);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);*/ // Snackbar reference and pop state
  return (
    <div className='main-container'>
      <SidebarR/>
      <div className='body-container'> 
          <HeaderR title="Trainees"/> 
          <div className="content-container">
          
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