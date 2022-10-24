import React, { useState, useEffect } from 'react'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'

import { getTransactionDetails} from "../../../../services/PaymentService";

import './Analytics.css'

const Analytics = () => {

  useEffect(() => {
    checkValidate();
    getTransactions();
}, []);

const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
        window.location.href = "/";
    }
};

const getTransactions = async () => {
    const res = await getTransactionDetails();
    console.log(res.data);
    setTransactions(
        [...res.data]
    );
    console.log(transactions);
};

const [transactions, setTransactions] = useState([]);

  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Transactions" />
        <div className="content-container">
          {/* <Tabs 
            defaultActiveKey="Cash"
            className='mb-3'
          >
            <Tab eventKey="Cash" title="Cash Payments">
              <div className='rec-analytics-card-container'>
                <div className='rec-analytics-total-card'>
                  <div className='rec-analytics-card-title'>Total Today</div>
                  <div className='rec-analytics-card-value'>Rs. 1500</div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Other" title="Other Payments">
            `<div className='rec-analytics-card-container'>
                <div className='rec-analytics-total-card'>
                  <div className='rec-analytics-card-title'>Total Today</div>
                  <div className='rec-analytics-card-value'>Rs. 1500</div>
                </div>
              </div>
            </Tab>
          </Tabs> */}
          <div className='rep-transactions-cards-container'>
          <div className='rec-analytics-card-container'>
              <div className='rec-analytics-total-card'>
                <div className='rec-analytics-card-title'>Total Payments</div>
                <div className='rec-analytics-card-value'>Rs. 8500</div>
              </div>
          </div>
          <div className='rec-analytics-card-container'>
              <div className='rec-analytics-total-card'>
                <div className='rec-analytics-card-title'>Total Cash Payments</div>
                <div className='rec-analytics-card-value'>Rs. 6500</div>
              </div>
          </div>
          <div className='rec-analytics-card-container'>
              <div className='rec-analytics-total-card'>
                <div className='rec-analytics-card-title'>Total Online Payments</div>
                <div className='rec-analytics-card-value'>Rs. 2000</div>
              </div>
          </div>
          </div>
          <div className="table-div">
            <MaterialTable
              title="Payments"
              columns={[
                { title: "Payment ID", field: "payment_id" },
                { title: "Amount", field: "amount" },
                { title: "Payment Type", field: "type" },
                { title: "Date", field: "date" },
                { title: "Payment Plan ID", field: "payment_planid" },
                { title: "Trainee ID", field: "trainee_id" },

              ]}
              icons={TableIcons}
              data={transactions}
              // actions={[
              //   {
              //     icon: () => {
              //       return (

              //         <span style={{ paddingRight: "20px", cursor: 'pointer' }}><img src={Arrow} alt="" height={20} width={20} /></span>
              //       );
              //     },
              //     onClick: (event, rowData) => {

              //     },
              //   },

              //   {
              //       icon: () => {
              //           return (

              //               <button
              //                   type="button"
              //                   className="btn mt-0"
              //                   style={{
              //                       backgroundColor: "#FF2121",
              //                       border: "none",
              //                   }}
              //               >
              //                   Leave
              //               </button>
              //           );
              //       }}
                

              // ]}

              
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
    </div >
  )
}

export default Analytics
