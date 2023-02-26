import { logo, menu } from "../../assets";

const Navbar = ({ sidebarWidth }) => {
  return (
    <nav className="navbar fixed-top bg-light" style={{ left: sidebarWidth }}>
      <div className="container-fluid">
        <div className="d-flex gap-5">
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
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex align-items-center gap-2">
            <div>Logo</div>
            <div>Nama</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
