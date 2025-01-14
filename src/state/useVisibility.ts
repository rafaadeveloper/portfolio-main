import { create } from "zustand";

interface VisibilityIFrame {
  visibility: boolean;
  setVisibility: (e: boolean) => void;
}

export const useVisibility = create<VisibilityIFrame>((set: Function) => ({
  visibility: false,
  setVisibility: (e: boolean) => set({ visibility: e }),
}));
