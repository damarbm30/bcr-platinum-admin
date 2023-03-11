import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMonth = create(
  persist(
    (set) => ({
      month: null,
      setMonth: (state) => {
        set(() => ({
          month: state.month,
        }));
      },
    }),
    { name: "month" }
  )
);

export default useMonth;
