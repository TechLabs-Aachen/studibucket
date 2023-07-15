import { create } from 'zustand'
import { FirebaseAuthTypes }  from '@react-native-firebase/auth/lib/' 

interface AuthState {
  user: FirebaseAuthTypes.User | null,
  setUser: (user: FirebaseAuthTypes.User | null) => void
}

export const useAuthStore = create<AuthState>()((set, get) => ({
    user: null,
    setUser: (newUser) => set((state) => ({user: newUser}))
}))