import { StoreActions } from "@/store/types";
import { create } from "zustand";
import { createJSONStorage, persist, PersistStorage } from "zustand/middleware";
import superjson from "superjson";
export interface User {
  id: string;
  name: string;
}

export interface UserModel {
  _hasHydrated: boolean;
  isLogin: boolean;
  me?: User;
}

export interface UserActions {
  setHasHydrated: (hasHydrated: boolean) => void;
  setMe: (user: User) => void;
  logout: () => void;
}

export interface UserStore extends UserModel, UserActions {}

export const userInitialState: UserModel = {
  _hasHydrated: false,
  isLogin: false,
};

const getAppStoreActions: StoreActions<UserModel & UserActions, UserActions> = (set, _get) => ({
  setHasHydrated: (hasHydrated) => set({ _hasHydrated: hasHydrated }),
  setMe: (user) =>
    set({
      me: user,
      isLogin: true,
    }),
  logout: () => {
    set({
      me: undefined,
      isLogin: false,
    });
  },
});

const storage: PersistStorage<UserModel> = {
  getItem: (name) => {
    const str = sessionStorage.getItem(name);
    if (!str) return null;
    return { ...superjson.parse(str), _hasHydrated: false } as any;
  },
  setItem: (name, value) => {
    sessionStorage.setItem(name, superjson.stringify(value));
  },
  removeItem: (name) => sessionStorage.removeItem(name),
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      ...userInitialState,
      ...getAppStoreActions(set, get),
    }),
    {
      name: "user",
      storage,
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
