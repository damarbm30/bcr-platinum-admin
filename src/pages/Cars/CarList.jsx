import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import useCar from "~/store/carList";
import CarItem from "./CarItem";
import DeleteModal from "./DeleteModal";
import useSearch from "~/store/searchResult";
import useApi from "~/hooks/useApi";
import { getCategory } from "~/utils";
import useApiSubmit from "~/hooks/useApiSubmit";
import moment from "moment/moment";

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
  const { response, isLoading } = useApi({
    method: "GET",
    url: "/admin/v2/car?pageSize=50",
    headers: {
      accept: "application/json",
      access_token: JSON.parse(localStorage.getItem("adminCredential")),
    },
  });
  const { response: deleteResponse, doSubmit: onDelete } = useApiSubmit({
    method: "DELETE",
    url: `/admin/car/${carId}`,
    headers: {
      accept: "application/json",
      access_token: JSON.parse(localStorage.getItem("adminCredential")),
    },
  });

  const peopleCap = getCategory(active);

  const filteredCarList = carList?.filter((car) => {
    if (active !== "All") {
      return (
        car?.name?.toLowerCase().includes(searchResult?.toLowerCase()) &&
        car?.category?.toLowerCase() === peopleCap
      );
    } else {
      return car?.name?.toLowerCase().includes(searchResult?.toLowerCase());
    }
  });

  const sortedCarList = filteredCarList.sort((a, b) => {
    return new moment(b.updatedAt).diff(a.updatedAt);
  });

  useEffect(() => {
    if (!isLoading) {
      setCarList({
        carList: response.cars,
        total: response?.cars?.length,
      });
    }
  }, [isLoading]);

  const handleGetId = (id) => {
    setCarId(id);
  };

  const handleDelete = async (carId) => {
    await onDelete(carId);
  };

  useEffect(() => {
    if (deleteResponse?.name === "Delete Success") {
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
  }, [deleteResponse]);

  return (
    <div className="container-fluid p-0">
      {!isLoading ? (
        <Wrapper>
          {carList?.length > 0 && sortedCarList?.length > 0 ? (
            sortedCarList?.map((car) => {
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
