import { create } from "zustand";
import User from "../interfaces/User";
import { devtools } from "zustand/middleware";

interface UserState {
  user: User | null;
  fetch: () => void;
}

export const userUserStore = create<UserState>()(
  devtools((set) => ({
    user: null,
    fetch: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_ROUTE}/users`);
      const json = await response.json();

      set({ user: json.data[0] });
    },
  }))
);
