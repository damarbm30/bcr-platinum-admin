import styled from "styled-components";
import { InnerSidebar } from "../../components";

const Cars = () => {
  const Container = styled.main`
    position: relative;
    width: 100%;
    background-color: var(--background);
  `;

  return (
    <>
      <InnerSidebar />
      <Container>
        <div className="position-absolute" style={{ top: "54px" }}>
          <p>Cars</p>
          <p>Cars</p>
          <p>Cars</p>
          <p>Cars</p>
        </div>
      </Container>
    </>
  );
};
export default Cars;
