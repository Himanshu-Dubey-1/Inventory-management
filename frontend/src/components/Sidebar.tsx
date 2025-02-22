import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaBox, FaUser, FaShoppingCart, FaInfo, FaChartPie } from "react-icons/fa";
import { inventoryContext } from "../context/inventoryProvider";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  const openctx = useContext(inventoryContext);
  const location = useLocation();


  // const toggleSidebar = () => {
  //   openctx.setIsOpen!(!openctx.isOpen);
  // };

  const menuItems = [
    { name: "Home", path: "/", icon: <FaChartPie /> },
    { name: "Dashboard", path: "/dashboard", icon: <FaChartPie /> },
    { name: "Inventory", path: "/inventory", icon: <FaBox /> },
    { name: "Users", path: "/users", icon: <FaUser /> },
    { name: "Products", path: "/products", icon: <FaShoppingCart /> },
    { name: "About", path: "/about", icon: <FaInfo /> },
    { name: "Logout", path: "/login", icon: <MdOutlineLogout /> },
  ];

  return (
    <div className="">
      {/* Sidebar */}
      <div
        className={`bg-[#AAA1C8] text-white h-screen p-4 transition-all ${
          openctx.isOpen ? "w-64" : "w-64"
        }`}
      >
        <button
          
          className="text-white text-xl mb-4 focus:outline-none w-full justify-center flex "
        >
          <h1>Stock</h1>
        </button>
        <hr />
        
        
        <ul className="space-y-4 mt-3">
          {menuItems.map(({ name, path, icon }) => (
            <li key={name}>
              <Link
                to={path}
                
                className={`flex items-center gap-2 p-2 rounded transition ${
                  location.pathname === path
                    ? "bg-blue-500"
                    : "hover:bg-gray-700"
                }`}
              >
                {icon}
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
