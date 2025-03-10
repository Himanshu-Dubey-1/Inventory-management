import { useAppDispatch, useAppSelector } from "../store/Hooks/hook";
import { fetchitems } from "../store/slices/items/itemSlice";
import { fetchusers } from "../store/slices/user/userSlice";

import BarGraph from "../components/Graphs/BarGraph";
import LineGraph from "../components/Graphs/LineGraph";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.items.items);
  const users = useAppSelector((state) => state.users.user);

  const labels = products.map((product) => product.name);
  const quantity = products.map((product) => product.quantity);
  const price = products.map((product) => product.price);

  if (products.length === 0 && users.length === 0) {
    dispatch(fetchitems());
    dispatch(fetchusers());
  }

  return (
    <>
      <div className="md:flex pl-2">
      <div className="flex w-full h-[15rem] md:h-[30rem] mt-10  md:pl-20">
        <BarGraph
          label={labels}
          datas={quantity}
          title="Total quantity Graph"
          heading="Quantity Data"
        />
      </div>
      <div className="flex w-full h-[15rem] md:h-[30rem] mt-10 ">
        <LineGraph
          label={labels}
          datas={price}
          title="Price Difference Graph"
          heading="Price Data"
        />
      </div>
      </div>

      <div className="md:flex gap-x-5">
        <div className="hidden md:block max-w-[60%]">
          {/* product page */}
         
          <div className="bg-gray-100 mt-8 rounded-xl shadow-lg ">
            <div className="mx-auto px-4 sm:py-2 lg:max-w-7xl ">
              <div className="items-center mb-4">
                <div className="text-center items-center justify-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Products
                  </h2>
                </div>
                <hr className="mx-20" />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 overflow-y-auto max-h-200 pr-5">
                {products.map((product) => (
                   <Link to={`/${product._id}`}  key={product._id}>
                  <div
                 
                    className="group relative border border-gray-200 p-2 rounded-md shadow-md"
                  >
                    <img
                      alt={"NO Image Found"}
                      src={product.picture}
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-70"
                    />
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <p>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </p>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500"></p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            {/* user page */}
            <div className="md:p-6 m-1 bg-white shadow-md rounded-lg md:mr-12 mt-8 ">
              <div className="items-center mb-4">
                <div className="text-center items-center justify-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">Users</h2>
                </div>
                <hr className="mx-14" />
              </div>

              <div className="overflow-y-scroll max-h-85 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left px-4 py-3 text-gray-700 font-medium">
                        Name
                      </th>
                      <th className="text-left px-4 py-3 text-gray-700 font-medium">
                        Title
                      </th>
                      <th className="text-left px-4 py-3 text-gray-700 font-medium">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {users.map((user) => (
                      <tr key={user._id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-900">
                          {user.username}
                        </td>
                        <td className="px-4 py-3 text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-4 py-3 text-gray-500">{user.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            {/* inventory page */}
            <div className="md:p-6 m-1 bg-white shadow-md rounded-lg mt-6 md:mr-12">
              <div className="items-center mb-4">
                <div className="text-center items-center justify-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Product Inventory
                  </h2>
                </div>
                <hr className="mx-14" />
              </div>
              <div className="overflow-y-auto max-h-80">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left px-4 py-3 text-gray-700 font-medium">
                        Name
                      </th>
                      <th className="text-left px-4 py-3 text-gray-700 font-medium">
                        Price
                      </th>
                      <th className="text-left px-4 py-3 text-gray-700 font-medium">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {products.map((inventory) => (
                      <tr key={inventory._id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-500">
                          {inventory.name}
                        </td>
                        <td className="px-4 py-3 text-gray-500">
                          ${inventory.price}
                        </td>
                        <td className="px-4 py-3 text-gray-500">
                          {inventory.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
