import React, { useState} from "react";
import { Button } from "react-bootstrap";
import './checkModal.css'
import InputField from "../Form/InputField";

const CheckinModal = ({open,onClose}) => {

    const [requestData, setState] = useState({

        traineeid: '',
        traineename: '',
        checkindate: '',
        checkintime: '',
    });

    if(!open) return null
    return(
        <div className="rec-check-overlay">
            <div className="rec-check-container">
                <Button onClick={onClose} className="rec-cmodal-closebtn">X</Button>
                <p className="rec-check-title">Check In form</p>
                <form className="rec-check-form" action="">
                    <div className="rec-check-input">
                    <InputField
                    value={requestData.traineeid}
                    type='text'
                    label="TRAINEE ID"
                    placeholder="T000001"
                    readonly={true}
                    />
                    </div>
                    <div className="rec-check-input">
                    <InputField
                    value={requestData.traineename}
                    type='text'
                    label = "TRAINEE NAME"
                    placeholder="Kasun Perera"
                    readonly={true}
                    />
                    </div>
                    <div className="rec-check-input">
                    <InputField
                    value={requestData.checkindate}
                    type='text'
                    label = "CHECK IN DATE"
                    placeholder="2022-07-12"
                    readonly={true}
                    />
                    </div>
                    <div className="rec-check-input">
                    <InputField
                    value={requestData.checkintime}
                    type='text'
                    label = "CHECK IN TIME"
                    placeholder="10.10 a.m."
                    readonly={true}
                    />
                    </div>
                    <div>
                        <Button onClick={onClose} className="rec-modal-btn rec-cancelbtn">Cancel</Button>
                        <Button className="rec-modal-btn rec-confirmbtn">Confirm</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CheckinModal