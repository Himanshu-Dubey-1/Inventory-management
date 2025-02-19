import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import { inventoryContext } from "../context/inventoryProvider";
import { useContext } from "react";

const MainLayout = () => {

  const openctx = useContext(inventoryContext);

  return (
    <div className="">
      <div className="fixed left-0">
        <Sidebar />
      </div>
      <div className="ml-64">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
