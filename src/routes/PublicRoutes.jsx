import { Outlet, Navigate } from "react-router-dom";

const isAuth = () => {
  const admin = localStorage.getItem("adminCredential");

  return admin ? true : false;
};

const PublicRoutes = () => {
  const admin = isAuth();

  return admin ? <Navigate to="/cars" replace /> : <Outlet />;
};
export default PublicRoutes;
