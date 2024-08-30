import { createStore } from 'zustand/vanilla';

export type AuthState = {
  user: string | undefined;
};

export type AuthActions = {
  setUser: (email: string | undefined) => void;
  clearUser: () => void;
};

export type AuthStore = AuthState & AuthActions;

export const defaultAuthState: AuthState = {
  user: undefined,
};

export const createAuthStore = (initState: AuthState = defaultAuthState) => {
  return createStore<AuthStore>()((set) => ({
    ...initState,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: undefined }),
  }));
};
