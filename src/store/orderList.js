import { create } from "zustand";
import { persist } from "zustand/middleware";

const useOrder = create(
  persist(
    (set) => ({
      total: 0,
      orderList: [],
      setOrderList: (state) => {
        set(() => ({
          total: state.total,
          orderList: state.orderList,
        }));
      },
    }),
    { name: "order" }
  )
);

export default useOrder;
