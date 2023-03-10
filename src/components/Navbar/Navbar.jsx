import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { logo, menu } from "../../assets";
import useCar from "../../store/carList";

const Navbar = ({ sidebarWidth }) => {
  const [searchValue, setSearchValue] = useState("");

  const carList = useCar((state) => state.carList);

  const filteredCarList = carList.filter((car) =>
    car?.name?.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log("Search value: ", searchValue);
  console.log("Search result: ", filteredCarList);

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("adminCredential");
    navigate("/login");
  };

  return (
    <nav
      className="navbar fixed-top shadow-sm bg-white"
      style={{ left: sidebarWidth }}
    >
      <div className="container-fluid">
        <div className="d-flex" style={{ gap: "5.5rem" }}>
          <button className="border-0 bg-transparent">
            <img src={logo} alt="logo" />
          </button>
          <button className="border-0 bg-transparent">
            <img src={menu} alt="menu" />
          </button>
        </div>
        <div className="d-flex align-items-center gap-3">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="btn fw-bold"
              type="submit"
              style={{
                color: "var(--primaryBlue)",
                borderColor: "var(--primaryBlue)",
              }}
            >
              Search
            </button>
          </form>
          <div className="d-flex align-items-center gap-2 px-5">
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                height: "30px",
                width: "30px",
                backgroundColor: "var(--hoverBlue)",
              }}
            >
              <p className="fw-bold ">A</p>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin BCR
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => onLogout()}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
