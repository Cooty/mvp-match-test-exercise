import { create } from "zustand";
import User from "../interfaces/User";
import { devtools } from "zustand/middleware";

interface UserState {
  user: User | null;
  error: string | null;
  fetch: () => void;
}

export const userUserStore = create<UserState>()(
  devtools((set) => ({
    user: null,
    error: null,
    fetch: async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_ROUTE}/users--`
        );
        console.log(response);
        if (response.status === 200) {
          const json = await response.json();
          if (json.code !== "200" && json.error) {
            set({ error: json.error });
          } else {
            set({ user: json.data[0] });
          }
        } else {
          set({ error: `Network error, code: ${response.status}` });
        }
      } catch (error) {
        const e = error as Error;
        set({ error: e.message });
      }
    },
  }))
);
