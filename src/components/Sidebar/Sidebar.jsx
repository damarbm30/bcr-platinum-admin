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
        className="d-flex flex-column justify-content-center align-items-center p-2 gap-4"
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
        <div className="d-flex flex-column align-items-center justify-content-center">
          <button className="border-0 bg-transparent">
            <img src={truck} alt="truck" />
            <p className="text-white mb-0" style={{ fontSize: "0.75rem" }}>
              Cars
            </p>
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Sidebar;
