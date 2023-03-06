import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { getCars, deleteCar } from "../../services/carServices";
import useCar from "../../store/carList";
import CarItem from "./CarItem";
import DeleteModal from "./DeleteModal";

const CarList = ({ active }) => {
  const [carId, setCarId] = useState(null);
  const [isSuccess, setIsSuccess] = useState({
    add: false,
    edit: false,
    delete: false,
  });

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
  }, [isSuccess.add, isSuccess.edit, isSuccess.delete]);

  const handleDelete = async (carId) => {
    setIsSuccess({ ...isSuccess, delete: false });
    const result = await deleteCar(carId);

    if (result.status === 200) {
      setIsSuccess({ ...isSuccess, delete: true });
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
    <div className="container-fluid">
      <div className="row gap-5 justify-content-center">
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
      </div>
      <DeleteModal carId={carId} onDelete={handleDelete} />
      <ToastContainer closeButton={false} />
    </div>
  );
};
export default CarList;
