import React,{useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import Print from '../../../images/Icons/print-solid.svg'
import InputField from "../Form/InputField";
import { Validators } from "../Form/Validator/Validator";
import {getPaymentPlanTableDetails} from "../../../services/PaymentService";
import './leavemodal.css';




const PaymentModal = (props) => {

    useEffect(() => {
        getAllPayments();
      }, []);

    const [payment, setPayment] = useState("");

    const getAllPayments = async () => {
        const res = await getPaymentPlanTableDetails(props);
        console.log(res.data);
        setPayment(
            [...res.data]
        );
    };
    // const [requestData, setState] = useState({

    //     traineeid: '',
    //     traineename: '',
    //     duedate: '',
    //     lastpaymentdate: '',
    //     membershiptype: '',
    //     noofperiods: '',
    // });

    // const handleChange = (key) => (value) => {
    //     setState({
    //         ...requestData,
    //         [key]: value
    //     });
    // };

    // if(!open) return null
    return(
        <div className="rec-check-overlay">
            <div className="rec-leave-container" style={{top:"10px"}}>
                <div className="rec-leave-header">
                    <Button onClick={props.closePopUp} className="rec-cmodal-closebtn">X</Button>
                    <img src={Print} alt="" height={25} weight={25} style={{float:"left", margin:"20px"}}/>
                </div>
                <div className="rec-leave-title"> <p className="rec-check-title">Payment Slip</p> </div>
                <div className="rec-leave-body">
                    <div className="rec-leave-input">
                    <InputField 
                    value={props.msg}
                    type='text'
                    label="TRAINEE ID"
                    placeholder={props.msg}
                    readonly={true}
                    />
                    </div>
                    {/* <div className="rec-leave-input">
                    <InputField 
                    value={requestData.traineename}
                    type='text'
                    label="TRAINEE NAME"
                    placeholder="Kasun Perera"
                    readonly={true}
                    />
                    </div> */}
                    {/* <div className="rec-leave-input">
                    <InputField 
                    value={requestData.duedate}
                    type='text'
                    label="DUE DATE"
                    placeholder="2022/02/08"
                    readonly={true}
                    />
                    </div> */}
                    <div className="rec-leave-input">
                    <InputField 
                    value={payment.date}
                    type='text'
                    label="LAST PAYMENT DATE"
                    placeholder={payment.date}
                    readonly={true}
                    />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                    //value={requestData.membershiptype}
                    type='text'
                    value={props.type}
                    label="MEMBERSHIP TYPE"
                    placeholder={props.type}
                    readonly={true}
                    />
                    </div>
                    
                    <div className="rec-leave-input">
                        <InputField 
                        label="AMOUNT"
                        value={300}
                        type="number"
                        readonly={true}
                        />
                    </div>
                    <div>
                        <Button onClick={props.closePopUp} className="rec-modal-btn rec-cancelbtn">Cancel</Button>
                        <Button className="rec-modal-btn rec-confirmbtn">Confirm</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentModal
