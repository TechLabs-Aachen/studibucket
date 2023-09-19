import { create } from "zustand";
import { User } from "firebase/auth";

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  setUser: (newUser) => set((state) => ({ user: newUser })),
}));
