import { useEffect } from "react";

import { getCars } from "../../services/carServices";
import useCar from "../../store/carList";
import CarItem from "./CarItem";

const CarList = ({ active }) => {
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

    getCarsAsync();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row gap-5">
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
            />
          );
        })}
      </div>
    </div>
  );
};
export default CarList;
