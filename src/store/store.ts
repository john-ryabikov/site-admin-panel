import { create } from "zustand";
import type{ IAdmin } from "./store.types";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAdmin = create<IAdmin>()(
    persist(
        (set => ({
            match: false,
            toggleMatch: () => set((state) => ({match: !state.match}))
        })),
        {
            name: "admin-control",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)    