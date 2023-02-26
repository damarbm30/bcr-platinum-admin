import { Outlet } from "react-router-dom";
import { useRef, useLayoutEffect, useState } from "react";

import { Navbar, Sidebar } from "../components";
import { InnerSidebar } from "../components/InnerSidebar";

const ProtectedRoutes = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div className="d-flex">
      <Sidebar innerRef={ref} />
      <div className="w-100">
        <Navbar sidebarWidth={width} />
        <div className="d-flex">
          <InnerSidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default ProtectedRoutes;
