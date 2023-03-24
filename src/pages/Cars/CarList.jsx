import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import { deleteCar } from "../../services/carServices";
import useCar from "../../store/carList";
import CarItem from "./CarItem";
import DeleteModal from "./DeleteModal";
import useSearch from "../../store/searchResult";
import useApi from "../../hooks/useApi";
import { getFormattedCapacity } from "../../utils";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 2rem;
  justify-content: start;

  @media (min-width: 1024px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 1280px) {
    grid-template-columns: auto auto auto;
  }

  @media (min-width: 1600px) {
    grid-template-columns: auto auto auto auto;
  }
`;

const CarList = ({ active }) => {
  const [carId, setCarId] = useState(null);

  const { carList, setCarList, deleteCarList } = useCar((state) => state);

  const searchResult = useSearch((state) => state.searchResult);

  const peopleCap = getFormattedCapacity(active);

  const filteredCarList = (cars) => {
    return cars?.filter((car) => {
      if (active !== "All") {
        return (
          car?.name?.toLowerCase().includes(searchResult?.toLowerCase()) &&
          car.category.toLowerCase() === peopleCap
        );
      } else {
        return car?.name?.toLowerCase().includes(searchResult?.toLowerCase());
      }
    });
  };

  // useEffect(() => {
  //   async function getCarsAsync() {
  //     setIsLoading(true);
  //     const result = await getCars();
  //     setIsLoading(false);

  //     if (result) {
  //       setCarList({
  //         carList: result,
  //         total: result?.length,
  //       });
  //     }
  //   }

  //   getCarsAsync();
  // }, [isDeleted]);

  const { response, isLoading } = useApi({
    method: "GET",
    url: "/admin/v2/car?pageSize=50",
    headers: {
      accept: "application/json",
      access_token: JSON.parse(localStorage.getItem("adminCredential")),
    },
  });

  useEffect(() => {
    if (!isLoading) {
      setCarList({
        carList: response.cars,
        total: response?.cars?.length,
      });
    }
  }, [isLoading]);

  const handleDelete = async (carId) => {
    const result = await deleteCar(carId);
    if (result.status == 200) {
      deleteCarList({ id: carId });
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
      {!isLoading ? (
        <Wrapper>
          {carList?.length > 0 && filteredCarList(carList).length > 0 ? (
            filteredCarList(carList)
              ?.slice(0)
              .reverse()
              .map((car) => {
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
              })
          ) : (
            <p>Tidak ada mobil yang dapat ditampilkan</p>
          )}
        </Wrapper>
      ) : (
        <div
          className="d-flex w-100 align-items-center justify-content-center"
          style={{ paddingTop: "5em" }}
        >
          <CircularProgress size={250} style={{ color: "#0d28a6" }} />
        </div>
      )}
      <DeleteModal carId={carId} onDelete={handleDelete} />
      <ToastContainer closeButton={false} />
    </div>
  );
};
export default CarList;
