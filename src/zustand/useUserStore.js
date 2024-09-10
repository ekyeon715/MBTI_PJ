import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null, // 초기 user 상태
  setUser: (userData) => set({ user: userData }), // user 상태 업데이트 함수
  clearUser: () => set({ user: null }), // 로그아웃 시 user 상태 초기화
}));

export default useUserStore;
