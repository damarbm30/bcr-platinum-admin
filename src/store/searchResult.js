import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSearch = create(
  persist(
    (set) => ({
      total: 0,
      searchResult: [],
      setSearchResult: (state) => {
        set(() => ({
          searchResult: state.searchResult,
          total: state.total,
        }));
      },
    }),
    { name: "searchResult" }
  )
);

export default useSearch;
