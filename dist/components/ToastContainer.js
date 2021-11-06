"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Toast = _interopRequireDefault(require("./Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToastContainer = _ref => {
  let {
    toastStateList,
    closeToast
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toast-container"
  }, toastStateList.map((toastState, index) => {
    return /*#__PURE__*/_react.default.createElement(_Toast.default, {
      key: index,
      messageContent: toastState.messageContent,
      messageType: toastState.messageType,
      close: () => closeToast(index),
      displayTime: toastState.displayTime
    });
  }));
};

var _default = ToastContainer;
exports.default = _default;