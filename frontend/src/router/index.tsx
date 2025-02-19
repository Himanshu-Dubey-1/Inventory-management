import { createBrowserRouter, Navigate } from "react-router-dom";
import About from "../view/About";
import Home from "../view/Home";
import MainLayout from "../layout/MainLayout";
import Signup from "../view/Signup";
import Login from "../view/Login";
import Products from "../view/Products";
import Inventory from "../view/Inventory";
import Dashboard from "../view/Dashboard";
import Users from "../view/Users";

const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Navigate to="/home" replace={true} />,
    // },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "inventory",
          element: <Inventory />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/SignUp",
      element: <Signup />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    
  ]);
  
  export default router;
  