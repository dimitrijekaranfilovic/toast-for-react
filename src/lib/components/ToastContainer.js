import React from "react";
import Toast from "./Toast";
import "./toast.css";
import PropTypes from "prop-types";

const ToastContainer = ({
  toastStateList,
  justify = "flex-end",
  direction = "column",
  side = "right",
  head = "bottom",
}) => {
  return (
    <div
      className="toast-container"
      style={{
        display: "flex",
        justifyContent: justify,
        flexDirection: direction,
        [side]: 0,
        [head]: 0,
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
  justify: PropTypes.oneOf(["flex-start", "flex-end", "center"]),
  direction: PropTypes.oneOf(["row", "column", "column-reverse"]),
  side: PropTypes.oneOf(["left", "right"]),
  head: PropTypes.oneOf(["top", "bottom"]),
  center: PropTypes.oneOf(["top", "bottom"]),
};

export default ToastContainer;
