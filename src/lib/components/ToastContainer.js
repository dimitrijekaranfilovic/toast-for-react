import React from "react";
import Toast from "./Toast";

const ToastContainer = ({ toastStateList, closeToast }) => {
  return (
    <div className="toast-container">
      {toastStateList.map((toastState, index) => {
        return (
          <Toast
            key={toastState.toastId}
            messageContent={toastState.messageContent}
            messageType={toastState.messageType}
            close={() => closeToast(toastState.toastId)}
            displayTime={toastState.displayTime}
          />
        );
      })}
    </div>
  );
};

export default ToastContainer;
