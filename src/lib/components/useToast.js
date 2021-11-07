import { useState } from "react";

//TODO: add closing toasts and toast build up from the bottom
export const useToast = () => {
  const [toastStateList, setToastStateList] = useState([]);
  const [toastId, setToastId] = useState(0);

  const closeToast = (toastId) => {
    setToastStateList((oldToastStateList) => {
      return oldToastStateList.filter((item) => item.toastId !== toastId);
    });
  };

  const showToast = (messageContent, messageType, displayTime = 5000) => {
    setToastStateList((oldToastStateList) => {
      return [
        ...oldToastStateList,
        { messageContent, messageType, displayTime, toastId },
      ];
    });

    setToastId(toastId + 1);
  };

  return { showToast, closeToast, toastStateList };
};
