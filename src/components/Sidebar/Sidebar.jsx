import styled from "styled-components";
import { home, smallLogo, truck } from "../../assets";

const Sidebar = ({ innerRef }) => {
  const Container = styled.div`
    background-color: var(--primaryBlue);
    height: 100vh;
    width: 70px;
    z-index: 1050;
  `;

  return (
    <Container>
      <div
        ref={innerRef}
        className="d-flex flex-column justify-content-center align-items-center w-100 pt-2"
        style={{ gap: "1.2rem" }}
      >
        <div>
          <img src={smallLogo} alt="small-logo" />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <button className="border-0 bg-transparent">
            <img src={home} alt="home" />
            <p className="text-white mb-0" style={{ fontSize: "0.75rem" }}>
              Dashboard
            </p>
          </button>
        </div>
        <div className="d-flex w-100 flex-column align-items-center justify-content-center">
          <div
            className="w-100"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          >
            <button className="border-0 p-2 bg-transparent w-100">
              <img src={truck} alt="truck" />
              <p className="text-white mb-0" style={{ fontSize: "0.75rem" }}>
                Cars
              </p>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Sidebar;
