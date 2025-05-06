import { createBrowserRouter } from "react-router-dom";
import About from "../view/About";
import Home from "../view/Home";
import MainLayout from "../layout/MainLayout";
import Signup from "../view/Signup";
import Login from "../view/Login";
import Products from "../view/Products";
import Inventory from "../view/Inventory";
import Dashboard from "../view/Dashboard";
import Users from "../view/Users";
import ProtectedRoute from "./protectedroute";
import NotFound from '../components/NotFount'
import ProductPage from "../view/ProductPage";
import LandingPage from "../view/LandingPage";
import Cart from "../view/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: ":id",
          element: (
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "users",
          element: (
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          ),
        },
        {
          path: "inventory",
          element: (
            <ProtectedRoute>
              <Inventory />
            </ProtectedRoute>
          ),
        },
        {
          path: "dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
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
    {
      path: "*",
      element: <NotFound />,
    },
    
  ]);
  
  export default router;
  