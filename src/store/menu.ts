import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface MenuState {
  isOpened: boolean;
  toggle: () => void;
}

export const useMenu = create<MenuState>()(
  devtools((set) => ({
    isOpened: true,
    toggle: () => set((state) => ({ isOpened: !state.isOpened })),
  }))
);
