import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      // 네비게이션 on/off 제어 변수
      isNaviDrawer: false
    };
  }
});
