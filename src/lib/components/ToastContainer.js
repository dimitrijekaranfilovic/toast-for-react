import React from "react";
import Toast from "./Toast";
import "./toast.css";
import PropTypes from "prop-types";

const ToastContainer = ({ toastStateList, stack, direction }) => {
  const justify =
    stack === "end" || stack === undefined ? "flex-end" : "flex-start";

  const flDirecyion =
    direction === "column" || direction === undefined ? "column" : "row";
  return (
    <div
      className="toast-container"
      style={{
        display: "flex",
        justifyContent: justify,
        flexDirection: flDirecyion,
      }}
    >
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

ToastContainer.propTypes = {
  stack: PropTypes.oneOf(["start", "end"]),
  direction: PropTypes.oneOf(["row", "column"]),
};

export default ToastContainer;
