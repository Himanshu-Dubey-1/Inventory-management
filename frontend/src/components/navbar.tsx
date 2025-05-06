import { Link } from "react-router-dom";
import AvatarDropdown from "./avatarDropdown";

const navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-blue-200 backdrop-blur-lg px-4 py-1">
      <div className="text-3xl font-bold text-blue-900 tracking-wide">
        <Link to={"/"}>Invy</Link>
      </div>
        <div className="flex space-x-2 mx-10 ">
          <AvatarDropdown />
        </div>
      </div>
    
    </>
  );
};

export default navbar;
