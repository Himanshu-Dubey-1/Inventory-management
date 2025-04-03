import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaBox,
  FaUser,
  FaShoppingCart,
  FaInfo,
  FaChartPie,
  FaHome
} from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { useAppDispatch,useAppSelector } from "../store/Hooks/hook";
import {togglesidebar} from "../store/slices/sidebar/sidebarSlice"

const Sidebar = () => {
  const location = useLocation();

  const togglebutton = useAppSelector((state) => state.sidebar.isOpen);
  const deispatch = useAppDispatch();


  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Dashboard", path: "/dashboard", icon: <FaChartPie /> },
    { name: "Inventory", path: "/inventory", icon: <FaBox /> },
    { name: "Users", path: "/users", icon: <FaUser /> },
    { name: "Products", path: "/products", icon: <FaShoppingCart /> },
    { name: "About", path: "/about", icon: <FaInfo /> },
  ];

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

  return (
    <div className="">
      {/* Sidebar */}
      <div
        className={`bg-[#AAA1C8] text-white h-screen p-4 transition-all ${
          togglebutton ? "w-64" : "w-16"}`}
      >
        <button className="text-white text-xl mb-4 focus:outline-none w-full justify-center flex "
        onClick={() => deispatch(togglesidebar())}>
          <h1>{<FaBars />}</h1>
        </button>
        <hr />

        <ul className="space-y-4 mt-3">
          {menuItems.map(({ name, path, icon }) => (
            <li key={name}>
              <Link
                to={path}
                className={`flex items-center gap-2 py-2 rounded transition ${
                  location.pathname === path
                    ? "bg-blue-500"
                    : "hover:bg-gray-700"
                }`}
              >
                <span className="text-2xl pl-1">{icon}</span>
                <span className={`${togglebutton? "block" : "hidden" }`}>{name}</span>
              </Link>
            </li>
          ))}
            <Link to={"/login"} className="flex items-center gap-2 py-2 rounded transition hover:bg-gray-700" onClick={() => deleteCookie("uid")}>  
              
              <span className="text-2xl pl-1"><MdOutlineLogout /></span>
              <h2 className={`${togglebutton? "block" : "hidden" }`}> Logout</h2>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
