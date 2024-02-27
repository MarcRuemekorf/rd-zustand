import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'


export const useStore = create(
  persist(
    (set) => ({
      teamA: 0,
      teamB: 0,
      increaseTeamAScore: () => set((state) => ({ teamA: state.teamA + 1 })),
      decreaseTeamAScore: () => set((state) => ({ teamA: state.teamA - 1 })),
      increaseTeamBScore: () => set((state) => ({ teamB: state.teamB + 1 })),
      decreaseTeamBScore: () => set((state) => ({ teamB: state.teamB - 1 })),
    }),
    {
      name: 'zustand-storage',
      storage: createJSONStorage(() => sessionStorage), // by default, 'localStorage' is used
    },
  )
)