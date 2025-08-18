// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = () => {
  const token = Cookies.get("jwt"); // Change "jwt" to your actual cookie key

  return token ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
