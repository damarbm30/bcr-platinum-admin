import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../components";

const ProtectedRoutes = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};
export default ProtectedRoutes;
