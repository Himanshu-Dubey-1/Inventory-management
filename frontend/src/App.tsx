import { useContext } from "react";
import { inventoryContext } from "./context/inventoryProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";

function App() {
  const countctx = useContext(inventoryContext);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
