import InventoryCard from "../components/inventoryCard";
import { useAppDispatch, useAppSelector } from "../store/Hooks/hook";
import { fetchitems } from "../store/slices/items/itemSlice";
import { fetchusers } from "../store/slices/user/userSlice";

const Inventory = () => {
  // const products = useAppSelector((state) => state.items.items);
  const dispatch = useAppDispatch();
      const products = useAppSelector((state) => state.items.items);
      const users = useAppSelector((state) => state.users.user);
    
  
      if (products.length === 0 && users.length === 0) {
        dispatch(fetchitems());
        dispatch(fetchusers());
      }

  return (
    <div>
      <InventoryCard products={products} />
    </div>
  );
};

export default Inventory;
