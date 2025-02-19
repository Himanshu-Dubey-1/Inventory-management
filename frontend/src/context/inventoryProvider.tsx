import React, { createContext, ReactNode, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const inventoryContext = React.createContext<{
  count: number | null;
  setCount: React.Dispatch<React.SetStateAction<number | null>> | null;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> | null;
}>({
    count: null,
  setCount: null,
  isOpen: false,
  setIsOpen: null,
});

export const InventoryProvider = ({ children }: { children: ReactNode }) => {
  // const navigate = useNavigate()
  const [count, setCount] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <inventoryContext.Provider value={{ count, setCount, isOpen, setIsOpen }}> {children}</inventoryContext.Provider>
  );
};

// export const inventoryState = () => {
//   return useContext(inventoryContext);
// };

// export default inventoryProvider;
