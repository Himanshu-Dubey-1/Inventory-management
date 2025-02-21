import React, { createContext, ReactNode, useContext, useState } from "react";
import { IProduct } from "../models/IProduct";
import { IUser } from "../models/IUser";
// import { useNavigate } from "react-router-dom";

export const inventoryContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> | null;
  products: IProduct[]
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}>({
  isOpen: false,
  setIsOpen: null,
  products: [] as IProduct[],
  setProducts: ()=> {},
  users: [] as IUser[],
  setUsers: ()=> {},
});

export const InventoryProvider = ({ children }: { children: ReactNode }) => {
  // const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products , setProducts] = useState<IProduct[]>([])
  const [users , setUsers] = useState<IUser[]>([])
  return (
    <inventoryContext.Provider value={{ isOpen, setIsOpen, products, setProducts,setUsers,users }}> {children}</inventoryContext.Provider>
  );
};

// export const inventoryState = () => {
//   return useContext(inventoryContext);
// };

// export default inventoryProvider;
