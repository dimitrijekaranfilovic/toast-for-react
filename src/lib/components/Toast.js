import React, { useEffect } from "react";
import "./toast.css";

const Toast = ({
  messageContent,
  close,
  displayTime,
  messageType = "info",
}) => {
  useEffect(() => {
    setTimeout(close, displayTime);
  }, [close, displayTime]);

  const toastClass = `toast ${messageType}-toast`;
  return (
    <div className={toastClass} onClick={close}>
      <span className={`toast-icon ${messageType}-toast-icon`}></span>
      &nbsp;
      <h6>{messageContent}</h6>
    </div>
  );
};

export default Toast;
