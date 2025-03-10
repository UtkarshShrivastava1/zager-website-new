import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const { admin } = useAuth();
  return admin ? <Outlet /> : <Navigate to="/admin/admin-login" />;
};

export default PrivateRoute;
