import React, { useEffect } from "react";
import "./toast.css";

const Toast = ({
  messageContent,
  close,
  displayTime,
  messageType = "info",
}) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      close();
    }, displayTime);
    return () => {
      clearTimeout(timer);
    };
  }, [close, displayTime]);

  useEffect(() => {
    setTimeout(close, displayTime);
  }, [close, displayTime]);

  const toastClass = `toast ${messageType}-toast`;
  return (
    <div className={toastClass} onClick={close}>
      <span className={`toast-icon ${messageType}-toast-icon`}></span>
      &nbsp;
      <h6>{messageContent}</h6>
      {/* <p className="toast-close" onClick={close}>
        &times;
      </p> */}
    </div>
  );
};

export default Toast;
