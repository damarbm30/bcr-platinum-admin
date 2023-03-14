import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCar = create(
  persist(
    (set) => ({
      total: 0,
      carList: [],
      setCarList: () => {
        set((params) => ({
          carList: params.carList,
          total: params.total,
        }));
      },
      deleteCarList: () => {
        set((params) => ({
          carList: params.carList.filter((item) => item.id !== params.id),
        }));
      },
    }),
    { name: "car" }
  )
);

export default useCar;
