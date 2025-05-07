import { Link, useLocation } from "react-router-dom";
import { FaBars, FaUser, FaInfo, FaChartPie, FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineInventory } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../store/Hooks/hook";
import { togglesidebar, togglesidebarOff } from "../store/slices/sidebar/sidebarSlice";

const Sidebar = () => {
  const location = useLocation();

  const togglebutton = useAppSelector((state) => state.sidebar.isOpen);
  const deispatch = useAppDispatch();

  const menuItems = [
    { name: "Home", path: "", icon: <FaHome /> },
    { name: "Dashboard", path: "/dashboard", icon: <FaChartPie /> },
    { name: "Inventory", path: "/inventory", icon: <MdOutlineInventory /> },
    { name: "Users", path: "/users", icon: <FaUser /> },
    { name: "Products", path: "/products", icon: <AiFillProduct /> },
    { name: "About", path: "/about", icon: <FaInfo /> },
  ];

  return (
    <div className="">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-blue-300 via-blue-400 to-blue-200 text-white h-screen p-4 pt-7 transition-all ${
          togglebutton ? "w-64" : "w-16"
        }`}
      >
        <button
          className="text-white text-xl mb-4 focus:outline-none w-full justify-end pr-1 flex "
          onClick={() => deispatch(togglesidebar())}
        >
          <h1>{togglebutton?<MdClose /> : <FaBars /> }</h1>
        </button>
        <hr />

        <ul className="space-y-4 mt-3">
          {menuItems.map(({ name, path, icon }) => (
            <li key={name}>
              <Link
                to={`/main${path}`}
                onClick={() => deispatch(togglesidebarOff())}
                className={`flex items-center gap-2 py-2 rounded transition ${
                  location.pathname === path
                    ? "bg-blue-500"
                    : "hover:bg-gray-700"
                }`}
              >
                <span className="text-2xl pl-1">{icon}</span>
                <span className={`${togglebutton ? "block" : "hidden"}`}>
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
