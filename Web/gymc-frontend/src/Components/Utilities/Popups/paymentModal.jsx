import React,{useState} from "react";
import { Button } from "react-bootstrap";
import Print from '../../../images/Icons/print-solid.svg'
import InputField from "../Form/InputField";
import { Validators } from "../Form/Validator/Validator";
import './leavemodal.css'

const PaymentModal = (props) => {

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
                    // value={requestData.lastpaymentdate}
                    type='text'
                    label="LAST PAYMENT DATE"
                    placeholder="2022/01/07"
                    readonly={true}
                    />
                    </div>
                    <div className="rec-leave-input">
                    <InputField 
                    //value={requestData.membershiptype}
                    type='text'
                    label="MEMBERSHIP TYPE"
                    placeholder="Daily"
                    readonly={true}
                    />
                    </div>
                    if (condition) {
                        
                    }
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
