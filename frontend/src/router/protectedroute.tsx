import  { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactElement;
  }
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Replace this with your actual authentication check logic.
  const isAuthenticated = document.cookie

  if (!isAuthenticated) {
    // Redirect unauthenticated users to the Login page.
    return <Navigate to="/Login" replace />;
  }


  return children;
};

export default ProtectedRoute;
