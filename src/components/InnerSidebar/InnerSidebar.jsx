import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  left: 70px;
  height: 100vh;
  width: 220px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 54px;
`;

const InnerSidebar = ({ cars }) => {
  return (
    <Container>
      <Wrapper className="d-flex flex-column w-100 gap-3">
        <div className="mt-3 px-3 py-2">
          <p className="text-muted fw-bold mb-0 text-uppercase">
            {cars ? "Cars" : "Dashboard"}
          </p>
        </div>
        <div
          className="mt-3 px-3 py-2"
          style={{ backgroundColor: "var(--hoverBlue)" }}
        >
          <p className="fw-bold mb-0">{cars ? "List Car" : "Dashboard"}</p>
        </div>
      </Wrapper>
    </Container>
  );
};
export default InnerSidebar;
