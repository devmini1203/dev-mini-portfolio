<script lang="ts" setup>
const props = defineProps<{ scrollHeight: number }>();

const elementsStore = useElementsStore();

const myName = ref('Jong Min');
const portfolioMenu = ref([
  { menuName: 'About me', id: 1 },
  { menuName: 'Skills', id: 2 },
  /*  { menuName: 'Archiving', id: 5 }, */
  { menuName: 'Projects', id: 3 },
  { menuName: 'Career', id: 4 }
]);

const setContentId = (id: number) => {
  if (id === 1) {
    elementsStore.aboutMeRef?.scrollIntoView({ behavior: 'smooth' });
  }
  if (id === 2) {
    elementsStore.skillsRef?.scrollIntoView({ behavior: 'smooth' });
  }
  if (id === 3) {
    elementsStore.projectsRef?.scrollIntoView({ behavior: 'smooth' });
  }
  if (id === 4) {
    elementsStore.carerrRef?.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * about-me 컨테이너의 clientHeight 과 App.vue의 scrollHeight을 비교하여 적용할 클래스명을 리턴한다.
 */
const dynamicHeaderclass = computed(() => {
  const aboutMeHeight = document.getElementsByClassName('about-me-container')[0];
  const componentTopHeight = Number((aboutMeHeight as HTMLElement)?.offsetTop);

  if (props.scrollHeight >= componentTopHeight - 100) {
    return 'default-header-scroll';
  } else {
    return 'default-header';
  }
});
</script>

<template>
  <div :class="dynamicHeaderclass">
    <div class="header-content">
      <div class="my-name-box">
        {{ myName }}
      </div>

      <div class="portfolio-menu-parent-box">
        <div v-for="menu in portfolioMenu" :key="menu.menuName" class="child-box" @click="setContentId(menu.id)">
          {{ menu.menuName }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
