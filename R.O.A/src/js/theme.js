import { create } from "zustand";

export const useTheme = create((set) => ({
   theme:"light",

  toggleTheme: () => set((state) => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    return { theme: newTheme };
  }),
}));