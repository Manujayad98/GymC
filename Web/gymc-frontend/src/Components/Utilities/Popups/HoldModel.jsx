import React from "react";
import { Button } from "react-bootstrap";
import './Modal.css'

const HoldModal = ({ open, onClose }) => {
    if (!open) return null
    return (
        <div className="rec-modal-overlay" style={{ zIndex: '999' }}>
            <div className="rec-modal-container">
                <Button onClick={onClose} className="rec-modal-closebtn">X</Button>
                <p className="rec-modal-title">Are you sure you want to hold this record?</p>
                <div className="hold-model-btn-container">
                    <Button onClick={onClose} className="rec-modal-btn rec-cancelbtn">Cancel</Button>
                    <Button className="rec-modal-btn rec-holdbtn">Hold</Button>
                </div>
            </div>
        </div>
    )
}
export default HoldModal