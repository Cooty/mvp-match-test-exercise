import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface FiltersState {
  isTouched: boolean;
  setToTouched: () => void;
}

export const useFilters = create<FiltersState>()(
  devtools((set) => ({
    isTouched: false,
    setToTouched: () => {
      set({ isTouched: true });
    },
  }))
);
