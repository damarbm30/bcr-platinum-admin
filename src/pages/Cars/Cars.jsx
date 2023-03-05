import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { plus } from "../../assets";
import { InnerSidebar, Breadcrumb } from "../../components";
import CarList from "./CarList";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  top: 54px;
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
`;

const PEOPLE_COUNT = ["All", "2 - 4 people", "4 - 6 people", "6 - 8 people"];

const PeopleCapacity = ({ capacity, active, onCapacityChange }) => {
  return (
    <CapacityButton
      style={
        active === capacity
          ? {
              color: "var(--primaryBlue)",
              borderColor: "var(--primaryBlue)",
              backgroundColor: "var(--hoverBlue)",
            }
          : {}
      }
      onClick={() => onCapacityChange(capacity)}
    >
      {capacity}
    </CapacityButton>
  );
};

const Cars = () => {
  const [active, setActive] = useState("All");

  const handleCapacityChange = (item) => {
    setActive(item);
  };

  return (
    <section
      className="d-flex min-h-100"
      style={{
        position: "relative",
        left: "280px",
        width: "calc(100% - 280px)",
      }}
    >
      <InnerSidebar />
      <Wrapper>
        <div className="d-flex flex-column p-4 gap-4">
          <Breadcrumb />
          <div className="d-flex w-100 justify-content-between">
            <h4 className="fw-bold">List Car</h4>
            <Button className="btn btn-primary outline-none border-0 d-flex px-3 py-2 align-items-center gap-2">
              <img src={plus} alt="plus" />
              <Link to="/new-car" className="text-decoration-none text-white">
                Add New Car
              </Link>
            </Button>
          </div>
          <div className="d-flex gap-3">
            {PEOPLE_COUNT.map((capacity, index) => {
              return (
                <PeopleCapacity
                  key={index}
                  capacity={capacity}
                  active={active}
                  onCapacityChange={handleCapacityChange}
                >
                  {capacity}
                </PeopleCapacity>
              );
            })}
          </div>
          <CarList active={active} />
        </div>
      </Wrapper>
    </section>
  );
};
export default Cars;
