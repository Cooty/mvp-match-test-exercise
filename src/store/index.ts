import { create } from "zustand";
import User from "../interfaces/User";
import { devtools } from "zustand/middleware";

interface UserState {
  users: User[];
  fetch: () => void;
}

export const userUserStore = create<UserState>()(
  devtools((set) => ({
    users: [],
    fetch: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_ROUTE}/users`);
      const json = await response.json();

      set({ users: json.data });
    },
  }))
);
