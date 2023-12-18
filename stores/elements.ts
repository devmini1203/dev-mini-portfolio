import { defineStore } from 'pinia';

export const useElementsStore = defineStore('elements', {
  state: () => {
    return {
      bannerRef: null as HTMLElement | null,
      aboutMeRef: null as HTMLElement | null,
      skillsRef: null as HTMLElement | null,
      projectsRef: null as HTMLElement | null,
      carerrRef: null as HTMLElement | null
    };
  }
});
