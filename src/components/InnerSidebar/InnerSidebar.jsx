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

const InnerSidebar = () => {
  return (
    <Container>
      <Wrapper className="d-flex flex-column w-100 gap-3">
        <div className="mt-3 px-3 py-2">
          <p className="text-muted fw-bold mb-0">CARS</p>
        </div>
        <div
          className="mt-3 px-3 py-2"
          style={{ backgroundColor: "var(--hoverBlue)" }}
        >
          <p className="fw-bold mb-0">List Car</p>
        </div>
      </Wrapper>
    </Container>
  );
};
export default InnerSidebar;
