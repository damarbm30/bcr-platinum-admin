import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSearch = create(
  persist(
    (set) => ({
      searchResult: "",
      setSearchResult: (state) => {
        set(() => ({
          searchResult: state.searchResult,
        }));
      },
    }),
    { name: "searchResult" }
  )
);

export default useSearch;
