import { create } from "zustand";

export const useStore = create((set) => ({
  teamA: 0,
  teamB: 0,
  increaseTeamAScore: () => set((state) => ({ teamA: state.teamA + 1 })),
  decreaseTeamAScore: () => set((state) => ({ teamA: state.teamA - 1 })),
  increaseTeamBScore: () => set((state) => ({ teamB: state.teamB + 1 })),
  decreaseTeamBScore: () => set((state) => ({ teamB: state.teamB - 1 })),
}));