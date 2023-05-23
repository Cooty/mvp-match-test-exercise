import { create } from "zustand";
import { Option, makeOption } from "../ui/CustomSelect";
import { devtools } from "zustand/middleware";
import ApiResponse from "../interfaces/ApiResponse";
import Gateway from "../interfaces/Gateway";

interface GatewaysState {
  gateways: Option[] | null;
  error: string | null;
  fetch: () => void;
}

export const useGatewayOptions = create<GatewaysState>()(
  devtools((set) => ({
    gateways: [],
    error: null,
    fetch: async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_ROUTE}/gateways`
        );

        if (response.status === 200) {
          const json: ApiResponse<Gateway> = await response.json();
          if (json.code !== "200" && json.error) {
            set({ error: json.error });
          } else {
            const gatewayOptions = json.data.map((gateway) =>
              makeOption(
                gateway as unknown as Record<string, unknown>,
                "gatewayId",
                "name"
              )
            );
            const allGatewaysOption = { value: "", label: "All gateways" };
            gatewayOptions.unshift(allGatewaysOption);
            set({
              gateways: gatewayOptions,
            });
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
