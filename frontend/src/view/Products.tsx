import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../store/Hooks/hook";
import { fetchitems } from "../store/slices/items/itemSlice";
import { fetchusers } from "../store/slices/user/userSlice";

const Products = () => {
 
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.items.items);
  const users = useAppSelector((state) => state.users.user);

  if (products.length === 0 && users.length === 0) {
    dispatch(fetchitems());
    dispatch(fetchusers());
  }

  useEffect(() => {
            window.scrollTo(0, 0)
          }, [])

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
};

export default Products;
