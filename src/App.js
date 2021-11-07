import "./App.css";
import { useToast } from "./lib/components/useToast";
import ToastContainer from "./lib/components/ToastContainer";

function App() {
  const { toastStateList, showToast, closeToast } = useToast();
  return (
    <div>
      <ToastContainer toastStateList={toastStateList} closeToast={closeToast} />
      <button onClick={() => showToast("Error toast message.", "error", 3000)}>
        Error toast
      </button>
      <button
        onClick={() =>
          showToast("Success toast message.", "success", 3000, false)
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
