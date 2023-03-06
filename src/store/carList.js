import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCar = create(
  persist(
    (set) => ({
      total: 0,
      carList: [],
      setCarList: (state) => {
        set(() => ({
          carList: state.carList,
          total: state.total,
        }));
      },
    }),
    { name: "car" }
  )
);

export default useCar;
