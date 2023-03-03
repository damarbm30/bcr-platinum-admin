import { useEffect } from "react";

import { getCars } from "../../services/carServices";
import useCar from "../../store/carList";
import CarItem from "./CarItem";

const CarList = () => {
  const carList = useCar((state) => state.carList);
  const setCarList = useCar((state) => state.setCarList);

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
        {carList.map((car) => {
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
