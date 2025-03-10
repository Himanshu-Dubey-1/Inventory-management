import UserCard from "../components/UserCard";
import { useAppDispatch, useAppSelector } from "../store/Hooks/hook";
import { fetchitems } from "../store/slices/items/itemSlice";
import { fetchusers } from "../store/slices/user/userSlice";

const Users = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.items.items);
  const users = useAppSelector((state) => state.users.user);

  if (products.length === 0 && users.length === 0) {
    dispatch(fetchitems());
    dispatch(fetchusers());
  }

  return (
    <div>
      <UserCard users={users} />
    </div>
  );
};

export default Users;
