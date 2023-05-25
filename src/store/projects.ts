import { create } from "zustand";
import { Option, makeOption } from "../ui/CustomSelect";
import { devtools } from "zustand/middleware";
import ApiResponse from "../interfaces/ApiResponse";
import Project from "../interfaces/Project";

interface ProjectsState {
  projects: Option[] | null;
  error: string | null;
  fetch: () => void;
  selectedId: string;
  selectedName: string;
  setSelectedId: (selectedId: string) => void;
  setSelectedName: (selectedName: string) => void;
}

export const useProjects = create<ProjectsState>()(
  devtools((set) => ({
    projects: [],
    error: null,
    selectedId: "",
    selectedName: "",
    setSelectedId: (selectedId: string) => set({ selectedId: selectedId }),
    setSelectedName: (selectedName: string) =>
      set({ selectedName: selectedName }),
    fetch: async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_ROUTE}/projects`
        );

        if (response.status === 200) {
          const json: ApiResponse<Project> = await response.json();
          if (json.code !== "200" && json.error) {
            set({ error: json.error });
          } else {
            const projectOptions = json.data.map((project) =>
              makeOption(
                project as unknown as Record<string, unknown>,
                "projectId",
                "name"
              )
            );
            const allProjectsOption = { value: "", label: "All projects" };
            projectOptions.unshift(allProjectsOption);
            set({
              projects: projectOptions,
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
