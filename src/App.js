import "./App.css";
import { useToast } from "./lib/components/useToast";
import ToastContainer from "./lib/components/ToastContainer";

function App() {
  const { toastStateList, showToast } = useToast();
  return (
    <div>
      <ToastContainer toastStateList={toastStateList} />
      <button onClick={() => showToast("Error toast message.", "error", 3000)}>
        Error toast
      </button>
      <button
        onClick={() =>
          showToast(
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, consectetur quos praesentium itaque architecto veritatis dignissimos dolorum tempora culpa atque?",
            "success",
            5000
          )
        }
      >
        Sucess toast
      </button>
      <button onClick={() => showToast("Info toast message.", "info", 3000)}>
        Info toast
      </button>
    </div>
  );
}

export default App;
