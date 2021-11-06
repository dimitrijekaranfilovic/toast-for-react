import React from "react";
import Toast from "./Toast";

const ToastContainer = ({ toastStateList, closeToast }) => {
  return (
    <div className="toast-container">
      {toastStateList.map((toastState, index) => {
        return (
          <Toast
            key={index}
            messageContent={toastState.messageContent}
            messageType={toastState.messageType}
            close={() => closeToast(index)}
            displayTime={toastState.displayTime}
          />
        );
      })}
    </div>
  );
};

export default ToastContainer;
