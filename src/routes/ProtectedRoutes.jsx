import { Outlet, Navigate } from "react-router-dom";
import { useRef, useLayoutEffect, useState } from "react";

import { Navbar, Sidebar } from "../components";

const isAuth = () => {
  const admin = localStorage.getItem("adminCredential");

  return admin ? true : false;
};

const ProtectedRoutes = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  const admin = isAuth();

  useLayoutEffect(() => {
    setWidth(ref?.current?.offsetWidth);
  }, []);

  return admin ? (
    <div className="d-flex">
      <Sidebar innerRef={ref} />
      <div className="w-100">
        <Navbar sidebarWidth={width} />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
