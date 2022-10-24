import React, { useState, useEffect } from 'react'
import '../recept_sidebar/Sidebar.css'
import SidebarR from '../recept_sidebar/Sidebar'
import HeaderR from '../recept_header/Header'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

import MaterialTable from "material-table";
import TableIcons from '../../../Utilities/Tables/ReactTableIcons'
import Arrow from '../../../../images/Icons/arrow-square-right.svg'

import { getTransactionDetails , getTotalPayments ,getTotalCashPayments ,getTotalOnlinePayments} from "../../../../services/PaymentService";

import './Analytics.css'

const Analytics = () => {

  useEffect(() => {
    checkValidate();
    getTransactions();
    getTotalCard();
    getTotalCashCard();
    getTotalOnlineCard();

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

const getTotalCard = async () => {
  const res = await getTotalPayments();
  console.log(res.data);
  setTotalPayments(
    [res.data]
  );
  console.log(totalPayments);
};

const getTotalCashCard = async () => {
  const res = await getTotalCashPayments();
  console.log(res.data);
  setTotalCashPayments(
    [res.data]
  );
  console.log(totalCashPayments);
};

const getTotalOnlineCard = async () => {
  const res = await getTotalOnlinePayments();
  console.log(res.data);
  setTotalOnlinePayments(
    [res.data]
  );
  console.log(totalOnlinePayments);
};

const [transactions, setTransactions] = useState([]);
const [totalPayments,setTotalPayments] = useState([]);
const [totalCashPayments,setTotalCashPayments] = useState([]);
const [totalOnlinePayments,setTotalOnlinePayments] = useState([]);

  return (
    <div className='main-container'>
      <SidebarR />
      <div className='body-container'>
        <HeaderR title="Transactions" />
        <div className="content-container">
          
          <div className='rep-transactions-cards-container'>
          
          <div className='rec-analytics-card-container'>
              <div className='rec-analytics-total-card'>
                <div className='rec-analytics-card-title'>Total Payments</div>
                <div className='rec-analytics-card-value'>Rs. {totalPayments}</div>
                
              </div>
          </div>
          <div className='rec-analytics-card-container'>
              <div className='rec-analytics-total-card'>
                <div className='rec-analytics-card-title'>Total Cash Payments</div>
                <div className='rec-analytics-card-value'>Rs. {totalCashPayments}</div>
              </div>
          </div>
          <div className='rec-analytics-card-container'>
              <div className='rec-analytics-total-card'>
                <div className='rec-analytics-card-title'>Total Online Payments</div>
                <div className='rec-analytics-card-value'>Rs. {totalOnlinePayments}</div>
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
