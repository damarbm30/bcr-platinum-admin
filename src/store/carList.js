import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCar = create(
  persist(
    (set) => ({
      total: 0,
      carList: [],
      setCarList: (params) => {
        set(() => ({
          carList: params.carList,
          total: params.total,
        }));
      },
    }),
    { name: "car" }
  )
);

export default useCar;
