// src/features/auth/store/authStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  name: string;
  roles: string[];
}

interface AuthState {
  user: User | null;
  token: string | null;
  setCredentials: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setCredentials: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    { name: "auth-storage" },
  ),
);
