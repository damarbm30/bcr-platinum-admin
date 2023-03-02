import { useEffect } from "react";
import styled from "styled-components";
import { plus } from "../../assets";
import { InnerSidebar } from "../../components";
import { getCars } from "../../services/carServices";
import Breadcrumb from "./Breadcrumb";

const Content = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--background);
`;

const Button = styled.button`
  background-color: var(--primaryBlue);
  color: white;
`;

const CapacityButton = styled.button`
  background-color: white;
  color: var(--hoverBlue);
  padding: 0.25em 0.5em;
  border: 1px solid var(--hoverBlue);
  border-radius: 4px;
  font-weight: 500;
  &:focus {
    color: var(--primaryBlue);
    border-color: var(--primaryBlue);
    background-color: var(--hoverBlue);
  }
`;

const PEOPLE_COUNT = ["All", "2 - 4 people", "4 - 6 people", "6 - 8 people"];

const Cars = () => {
  useEffect(() => {
    getCars();
  }, []);

  return (
    <main className="d-flex w-100">
      <InnerSidebar />
      <Content>
        <div className="position-absolute w-100" style={{ top: "54px" }}>
          <div className="d-flex flex-column p-4 gap-4">
            <Breadcrumb />
            <div className="d-flex w-100 justify-content-between">
              <h4 className="fw-bold">List Car</h4>
              <Button className="btn btn-primary outline-none border-0 d-flex px-3 py-2 align-items-center gap-2">
                <img src={plus} alt="plus" />
                <p className="mb-0">Add New Car</p>
              </Button>
            </div>
            <div className="d-flex gap-3">
              {PEOPLE_COUNT.map((item) => {
                return <CapacityButton>{item}</CapacityButton>;
              })}
            </div>
            <p>Car List</p>
          </div>
        </div>
      </Content>
    </main>
  );
};
export default Cars;
