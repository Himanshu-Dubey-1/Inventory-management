import { useContext } from "react";
import { inventoryContext } from "./context/inventoryProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import { ToastContainer } from "react-toastify";

function App() {
  const countctx = useContext(inventoryContext);

  return (
    <>
    <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
