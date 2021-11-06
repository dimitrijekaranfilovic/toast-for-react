"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

//TODO: add closing toasts and toast build up from the bottom
const useToast = () => {
  const [toastStateList, setToastStateList] = (0, _react.useState)([]);

  const closeToast = toastIndex => {
    console.log("treba da zatvorim toast na indeksu ", toastIndex);
    setToastStateList(oldToastStateList => {
      return oldToastStateList.filter((_, index) => index !== toastIndex);
    });
  };

  const showToast = function showToast(messageContent, messageType) {
    let displayTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
    setToastStateList(oldToastStateList => {
      return [...oldToastStateList, {
        messageContent,
        messageType,
        displayTime
      }];
    });
  };

  return {
    showToast,
    closeToast,
    toastStateList
  };
};

exports.useToast = useToast;