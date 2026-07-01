import { create } from "zustand";

const DEV_MODE = true;
const MOCK_STATE = "user";

export const useAuthStore = create((set) => ({
  fetchUser: async () => {
    if (DEV_MODE) {
      let user = null;
      let shopOwner = null;

      if (MOCK_STATE === "user") {
        user = {
          id: "1",
          name: "samuel Victor",
          hasShop: false,
        };
      } else if (MOCK_STATE === "shopOwner") {
        shopOwner = {
          id: "1",
          name: "samuel Victor",
          hasShop: true,
        };
      }

      set({ user, shopOwner });
      return;
    }

    try {
      const res = await API.get("/auth/me");
      set({ user: res.data.user, loading: false });
    } catch {
      set({ user: null, loading: false });
    }
  },

  login: async (data) => {
    await API.post("/auth/login", data);
    await useAuthStore.getState().fetchUser();
  },

  logout: async () => {
    await API.post("/auth/logout");
    set({ user: null });
  },
}));
