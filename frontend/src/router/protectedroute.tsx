import  { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactElement;
  }
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = document.cookie.includes("uid")

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }


  return children;
};

export default ProtectedRoute;
