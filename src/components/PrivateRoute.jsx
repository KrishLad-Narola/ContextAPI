import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";

function PrivateRoute() {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;