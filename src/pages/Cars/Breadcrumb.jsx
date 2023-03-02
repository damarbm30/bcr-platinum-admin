import styled from "styled-components";

const Wrapper = styled.div`
  --bs-breadcrumb-divider: ">";
`;

const Breadcrumb = () => {
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
