import styled from "styled-components";
import { chevronRight } from "../../assets";

const Wrapper = styled.div`
  --bs-breadcrumb-divider: url(${chevronRight});
`;

const Breadcrumb = ({ newCar, editCar }) => {
  return (
    <Wrapper className="d-flex">
      <ul className="breadcrumb">
        <li className="breadcrumb-item fw-bold">Cars</li>
        <li className={`breadcrumb-item ${newCar || editCar ? "fw-bold" : ""}`}>
          List Car
        </li>
        {newCar ? <li className="breadcrumb-item">Add New Car</li> : ""}
        {editCar ? <li className="breadcrumb-item">Edit Car</li> : ""}
      </ul>
    </Wrapper>
  );
};
export default Breadcrumb;
