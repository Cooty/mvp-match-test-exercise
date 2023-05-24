import { create } from "zustand";
import { devtools } from "zustand/middleware";
import ApiResponse from "../interfaces/ApiResponse";
import Report from "../interfaces/Report";
import ReportsPayload from "../interfaces/ReportsPayload";

interface ReportsState {
  reports: Report[] | null;
  error: string | null;
  isLoading: boolean;
  fetch: (payload: ReportsPayload) => void;
}

export const useReports = create<ReportsState>()(
  devtools((set) => ({
    reports: [],
    isLoading: false,
    error: null,
    fetch: async (payload: ReportsPayload) => {
      try {
        set({ isLoading: true });
        const response = await fetch(
          `${import.meta.env.VITE_API_ROUTE}/report`,
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          const json: ApiResponse<Report> = await response.json();
          if (json.code !== "200" && json.error) {
            set({ error: json.error });
          } else {
            set({
              reports: json.data,
            });
          }
        } else {
          set({ error: `Network error, code: ${response.status}` });
        }
      } catch (error) {
        const e = error as Error;
        set({ error: e.message });
      } finally {
        set({ isLoading: false });
      }
    },
  }))
);
