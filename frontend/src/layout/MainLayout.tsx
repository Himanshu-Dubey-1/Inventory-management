import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="">
      <div className="fixed left-0 z-10">
        <Sidebar />
      </div>
      <div className="ml-16">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
