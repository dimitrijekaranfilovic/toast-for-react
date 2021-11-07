import React from "react";
import Toast from "./Toast";
import "./toast.css";

const ToastContainer = ({ toastStateList }) => {
  return (
    <div className="toast-container">
      {toastStateList.map((toastState) => {
        return (
          <Toast
            key={toastState.toastId}
            messageContent={toastState.messageContent}
            messageType={toastState.messageType}
            close={toastState.close}
            displayTime={toastState.displayTime}
            showIcon={toastState.showIcon}
          />
        );
      })}
    </div>
  );
};

export default ToastContainer;
