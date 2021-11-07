import React, { useEffect } from "react";

const Toast = ({
  messageContent,
  close,
  displayTime = 5000,
  messageType = "info",
  showIcon = true,
}) => {
  useEffect(() => {
    setTimeout(close, displayTime);
  }, [close, displayTime]);

  const toastClass = `toast ${messageType}-toast`;
  return (
    <div className={toastClass} onClick={close}>
      {showIcon && (
        <span className={`toast-icon ${messageType}-toast-icon`}></span>
      )}
      &nbsp;
      <h6>{messageContent}</h6>
    </div>
  );
};

export default Toast;
