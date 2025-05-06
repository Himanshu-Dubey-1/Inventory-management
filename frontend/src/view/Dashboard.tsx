import { useAppDispatch, useAppSelector } from "../store/Hooks/hook";
import { fetchitems } from "../store/slices/items/itemSlice";
import { fetchusers } from "../store/slices/user/userSlice";
import DashboardCards from "../components/dashboardCards";
import StockChart from "../components/stockCharts";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.items.items);
  const users = useAppSelector((state) => state.users.user);

  if (products.length === 0 && users.length === 0) {
    dispatch(fetchitems());
    dispatch(fetchusers());
  }

  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen flex-1">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <DashboardCards />
        <StockChart />
      </div>
    </>
  );
};

export default Dashboard;
