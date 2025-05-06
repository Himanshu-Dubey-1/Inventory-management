import { Link } from "react-router-dom";
import AvatarDropdown from "./avatarDropdown";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const navbar = () => {
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <>
      <div className="flex items-center justify-between bg-blue-200 backdrop-blur-lg px-4 py-1">
        <div className="text-3xl font-bold text-blue-900 tracking-wide">
          <Link to={"/"}>Invy</Link>
        </div>
        <div className="flex sm:space-x-2 sm:mx-10 ">
          <div>
            <AvatarDropdown />
          </div>
          <div>
            <Link to="/main/cart" className="relative">
              <HiOutlineShoppingCart className="text-4xl mt-3 ml-4 text-gray-800 hover:text-black" />
              {totalItems > 0 && (
                <span className="absolute top-2 -right-1 text-xs bg-red-600 text-white rounded-full px-1.5">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
