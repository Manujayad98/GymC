import React, { useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import './checkModal.css'
import InputField from "../Form/InputField";
import { ToastContainer, toast } from 'react-toastify';
import { getCheckinUserDetails, postCheckIn } from "../../../services/CheckInCheckOutService";
import { getDate, lastDayOfMonth, format } from "date-fns";


const CheckinModal = (props) => {

    useEffect(() => {
        getCheckIn();
      }, []);

    const [Checkin, setCheckin] = useState("");

    console.log(props.msg);

    const getCheckIn = async () => {
        const res = await getCheckinUserDetails(props.msg);
        console.log(res.data);
        setCheckin(
            res.data
        );
    };



    const [requestData, setState] = useState({

        traineeid: '',
        traineename: '',
        checkindate: '',
        checkintime: '',
    });

    const today = new Date();
    const formattedDate = format(today, 'dd.MM.yyyy');
    const formattedTime = format(today, 'hh.mm');

    console.log((formattedDate) );
    console.log((formattedTime) );

    const message = (evt => {
        toast.success("CheckIn Successful");
    })

    const handleSubmit = (evt) => {
        console.log(requestData);
        evt.preventDefault();
         {
            console.log(requestData);

            postCheckIn(requestData)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.data);
                        // setMessage(response.data);
                        
                            toast.success("CheckIn Successful");
                    }
                })
                .catch((err) => {
                    if (err && err.response) {
                        console.log(err);
                        toast.error('Failed!!!');
                    }
                });
        }
    };

    // if(!open) return null
    return(
        <div className="rec-check-overlay">
            <div className="rec-check-container">
                <div className="rec-check-header"><Button onClick={props.closePopUp} className="rec-cmodal-closebtn">X</Button></div>
                <div className="rec-check-formtitle"><p className="rec-check-title">Check In form</p></div>
                <div className="rec-check-body">
                    <form className="rec-check-form" action="">
                        <div className="rec-check-input">
                        <InputField
                        name='traineeid'
                        value={props.msg}
                        type='text'
                        label="TRAINEE ID"
                        placeholder={props.msg}
                        readonly={true}
                        />
                        </div>
                        {/* <div className="rec-check-input">
                        <InputField
                        value={Checkin.traineename}
                        type='text'
                        label = "TRAINEE NAME"
                        placeholder={Checkin.traineename}
                        readonly={true}
                        />
                        </div> */}
                        <div className="rec-check-input">
                        <InputField
                        value={formattedDate}
                        type='text'
                        label = "CHECK IN DATE"
                        placeholder={formattedDate}
                        readonly={true}
                        />
                        </div>
                        <div className="rec-check-input">
                        <InputField
                        value={formattedTime}
                        type='text'
                        label = "CHECK IN TIME"
                        placeholder={formattedTime}
                        readonly={true}
                        />
                        </div>
                        <div>
                            <Button onClick={props.closePopUp} className="rec-modal-btn rec-cancelbtn">Cancel</Button>
                            <Button onClick={message} className="rec-modal-btn rec-confirmbtn">Confirm</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CheckinModal