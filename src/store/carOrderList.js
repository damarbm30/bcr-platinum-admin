import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCarOrder = create(
  persist(
    (set) => ({
      total: 0,
      orders: [],
      setOrders: (state) => {
        set(() => ({
          total: state.total,
          orders: state.orders,
        }));
      },
    }),
    { name: "carOrder" }
  )
);

export default useCarOrder;
