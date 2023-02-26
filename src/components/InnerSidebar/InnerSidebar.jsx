import styled from "styled-components";

const InnerSidebar = () => {
  const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 220px;
  `;

  const Wrapper = styled.div`
    position: absolute;
    top: 54px;
  `;

  return (
    <Container>
      <Wrapper className="d-flex flex-column w-100 gap-4">
        <div className="pt-4 p-2">
          <p className="text-muted fw-bold mb-0">CARS</p>
        </div>
        <div className="p-2" style={{ backgroundColor: "var(--hoverBlue)" }}>
          <p className="fw-bold mb-0">List Car</p>
        </div>
      </Wrapper>
    </Container>
  );
};
export default InnerSidebar;
