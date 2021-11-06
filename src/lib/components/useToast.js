import { useState } from "react";

//TODO: add closing toasts and toast build up from the bottom
export const useToast = () => {
  const [toastStateList, setToastStateList] = useState([]);

  const closeToast = (toastIndex) => {
    console.log("treba da zatvorim toast na indeksu ", toastIndex);
    setToastStateList((oldToastStateList) => {
      return oldToastStateList.filter((_, index) => index !== toastIndex);
    });
  };
  const showToast = (messageContent, messageType, displayTime = 5000) => {
    setToastStateList((oldToastStateList) => {
      return [
        ...oldToastStateList,
        { messageContent, messageType, displayTime },
      ];
    });
  };

  return { showToast, closeToast, toastStateList };
};
