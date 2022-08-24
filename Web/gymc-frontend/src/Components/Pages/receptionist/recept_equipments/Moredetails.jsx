import React, { useEffect, useState } from 'react'

import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
import { Card } from 'react-bootstrap';
import Table from '../../../Utilities/Tables/Table1'
import Treadmill from '../../../../images/treadmill.png'
import Trash from '../../../../images/Icons/trash-solid.svg'
import Edit from '../../../../images/Icons/pen-solid.svg'
import UpdateequipmentModal from '../../../Utilities/Popups/equipmentupdate';
import './Equipments.css'
import DeleteModal from '../../../Utilities/Popups/DeletionModal';


const Equipments = () => {

  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };

  const [openupdateModal, setupdateModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const [equipmentDetails] = useState([
    {
        EquipmentID: "E0001",
        Manufacturer: "Quantum",
        DOP: "2020/02/08",
        Actions: (
          <span >
            <span style={{ paddingRight: "20px" }}><button onClick={() => setupdateModal(true)} style={{backgroundColor:"white"}} ><img src={Edit} alt="" height={20} width={20} /></button></span>
            <span style={{ paddingRight: "20px" }}><button onClick={() => setOpenModal(true)} style={{backgroundColor:"white"}}><img src={Trash} alt="" height={20} width={20} /></button></span>
          </span >
        ),
      },
      {
        EquipmentID: "E0002",
        Manufacturer: "Eser Marketing",
        DOP: "2020/10/08",
        Actions: (
          <span >
            <span style={{ paddingRight: "20px" }}><button onClick={() => setupdateModal(true)} style={{backgroundColor:"white"}} ><img src={Edit} alt="" height={20} width={20} /></button></span>
            <span style={{ paddingRight: "20px" }}><button onClick={() => setOpenModal(true)} style={{backgroundColor:"white"}}><img src={Trash} alt="" height={20} width={20} /></button></span>
          </span >
        ),
      },
      {
        EquipmentID: "E0003",
        Manufacturer: "Quantum",
        DOP: "2021/01/16",
        Actions: (
          <span >
            <span style={{ paddingRight: "20px" }}><button onClick={() => setupdateModal(true)} style={{backgroundColor:"white"}} ><img src={Edit} alt="" height={20} width={20} /></button></span>
            <span style={{ paddingRight: "20px" }}><button onClick={() => setOpenModal(true)} style={{backgroundColor:"white"}}><img src={Trash} alt="" height={20} width={20} /></button></span>
          </span >
        ),
      },
  ]);

  const [equipmentDetailstablehead] = useState([
    { id: "EquipmentID", label: "EQUIPMENT ID", numeric: false },
    { id: "Manufactrer", label: "MANUFACTURER", numeric: false },
    { id: "DOP", label: "DATE OF PURCHASE", numeric: false },
    { id: "Action", label:"" ,numeric: false }
  ]);

  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Equipment" />
        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem cum laudantium ipsa laborum esse! Atque temporibus asperiores veritatis ipsum enim ratione quia. Accusantium nesciunt, necessitatibus quaerat ea rerum aliquid minus?</p> */}
        <div className="content-container">
            <div className='content-row'>
                <div className='rec-equip-img'>
                    <img src={Treadmill} alt="" />
                </div>
                <div className='rec-equipment-table'>
                <Table
                rows={equipmentDetails}
                headCells={equipmentDetailstablehead}
                tablename={'Equipment'}
                />
                </div>
                <DeleteModal open={openModal} onClose={() => setOpenModal(false)} />
                <UpdateequipmentModal open={openupdateModal} onClose={() => setupdateModal(false)} />
            </div>
        </div>
      </div>

    </div>
  )
}

export default Equipments