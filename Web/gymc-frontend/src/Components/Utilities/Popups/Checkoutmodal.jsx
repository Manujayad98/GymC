import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './checkModal.css'
import InputField from "../Form/InputField";
import { getDate, lastDayOfMonth, format } from "date-fns";


const CheckoutModal = (props) => {

    const [requestData, setState] = useState({

        traineeid: '',
        traineename: '',
        checkindate: '',
        checkintime: '',
    });

    const today = new Date();
    const formattedDate = format(today, 'dd.MM.yyyy');
    const formattedTime = format(today, 'hh.mm');

    // if(!open) return null
    return (
        <div className="rec-check-overlay" style={{ zIndex: "999" }}>
            <div className="rec-check-container">
                <div className="rec-check-header"><Button onClick={props.closePopUp} className="rec-cmodal-closebtn">X</Button></div>
                <div className="rec-check-formtitle"><p className="rec-check-title">Check Out form</p></div>
                <div className="rec-check-body">
                    <form className="rec-check-form" action="">
                        <div className="rec-check-input">
                            <InputField
                                value={props.msg}
                                type='text'
                                label="TRAINEE ID"
                                placeholder={props.msg}
                                readonly={true}
                            />
                        </div>
                        {/* <div className="rec-check-input">
                        <InputField
                        value={requestData.traineename}
                        type='text'
                        label = "TRAINEE NAME"
                        placeholder="Kasun Perera"
                        readonly={true}
                        />
                        </div> */}
                        <div className="rec-check-input">
                            <InputField
                                value={formattedDate}
                                type='text'
                                label="CHECK IN DATE"
                                placeholder={formattedDate}
                                readonly={true}
                            />
                            <InputField
                                value={formattedTime}
                                type='text'
                                label="CHECK OUT TIME"
                                placeholder={formattedTime}
                                readonly={true}
                            />
                        </div>
                        {/* <div className="rec-check-input">
                        <InputField
                        value={requestData.checkintime}
                        type='text'
                        label = "CHECK IN TIME"
                        placeholder="10.10 a.m."
                        readonly={true}
                        /> */}
                        <div>
                            <Button onClick={props.closePopUp} className="rec-modal-btn rec-cancelbtn">Cancel</Button>
                            <Button className="rec-modal-btn rec-confirmbtn">Confirm</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CheckoutModal