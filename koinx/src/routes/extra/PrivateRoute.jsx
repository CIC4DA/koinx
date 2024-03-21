import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

// For Routes which can only be accessed by logged in User.
const PrivateRoute = (children) => {
  const { accessToken, isLoggedIn, user } = useSelector((state) => state.auth);

  const location = useLocation();

  if (accessToken && isLoggedIn && user) {
    return <Outlet />;
  }
  return <Navigate replace to="/signin" state={{ from: location }} />;
};

export default PrivateRoute;
