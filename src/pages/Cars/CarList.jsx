import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import { getCars, deleteCar } from "../../services/carServices";
import useCar from "../../store/carList";
import CarItem from "./CarItem";
import DeleteModal from "./DeleteModal";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 3rem;
  justify-content: space-between;

  @media (min-width: 1920px) {
    grid-template-columns: auto auto auto auto;
  }
`;

const CarList = ({ active }) => {
  const [carId, setCarId] = useState(null);
  const [isSuccessDelete, setIsSuccessDelete] = useState(false);

  const carList = useCar((state) => state.carList);
  const setCarList = useCar((state) => state.setCarList);

  let peopleCap;

  switch (active.toLowerCase()) {
    case "2 - 4 people":
      peopleCap = "small";
      break;
    case "4 - 6 people":
      peopleCap = "medium";
      break;
    case "6 - 8 people":
      peopleCap = "large";
      break;
  }

  const filteredCarList =
    active !== "All"
      ? carList.filter((car) => car.category.toLowerCase() === peopleCap)
      : carList;

  useEffect(() => {
    async function getCarsAsync() {
      const result = await getCars();
      setCarList({
        carList: result,
        total: result?.length,
      });
    }

    // if (isSuccess.add || isSuccess.edit || isSuccess.delete) {
    getCarsAsync();
    // }
  }, [isSuccessDelete]);

  const handleDelete = async (carId) => {
    setIsSuccess(false);
    const result = await deleteCar(carId);

    if (result.status === 200) {
      setIsSuccess(true);
      toast("Data Berhasil Dihapus", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        className: "text-center",
      });
    }
  };

  const handleGetId = (id) => {
    setCarId(id);
  };

  return (
    <div className="container-fluid p-0">
      <Wrapper>
        {filteredCarList?.map((car) => {
          const { id, image, name, price, category, updatedAt } = car;
          return (
            <CarItem
              key={id}
              id={id}
              image={image}
              name={name}
              price={price}
              category={category}
              updatedAt={updatedAt}
              onGetId={handleGetId}
            />
          );
        })}
      </Wrapper>
      <DeleteModal carId={carId} onDelete={handleDelete} />
      <ToastContainer closeButton={false} />
    </div>
  );
};
export default CarList;
