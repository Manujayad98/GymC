import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./popup.css";

const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    },
  }));
  return (
    <div
      className="snackbar"
      id={showSnackbar ? "show" : "hide"}
    >
      <div className="symbol" style={{
        backgroundColor: props.type === "success" ? "#32E04E" : "#ff2121",
      }}>
        {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
});

export default Snackbar;