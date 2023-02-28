import styled from "styled-components";

const Breadcrumb = () => {
  const Wrapper = styled.div`
    --bs-breadcrumb-divider: ">";
  `;

  return (
    <Wrapper>
      <ul className="breadcrumb">
        <li className="breadcrumb-item fw-bold">Cars</li>
        <li className="breadcrumb-item">List Car</li>
      </ul>
    </Wrapper>
  );
};
export default Breadcrumb;
