<script lang="ts" setup>
import { IconMenu2 } from '@tabler/icons-vue';

const props = defineProps<{
  appScrollHeight: number;
  appWidth: number;
}>();

const layoutStore = useLayoutStore();
const { isNaviDrawer } = storeToRefs(layoutStore);

const myName = ref('Jong Min');
const portfolioMenu = ref([
  { menuName: 'About me', id: 1 },
  { menuName: 'Skills', id: 2 },
  { menuName: 'Projects', id: 3 },
  { menuName: 'Career', id: 4 },
  { menuName: 'Etc', id: 5 }
]);

const elementsStore = useElementsStore();
const moveToContent = (id: number) => {
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
  if (id === 5) {
    elementsStore.etcRef?.scrollIntoView({ behavior: 'smooth' });
  }
};
const dynamicHeaderclass = computed(() => {
  const aboutMeHeight = elementsStore.aboutMeRef;
  const componentTopHeight = Number(aboutMeHeight?.offsetTop);

  if (props.appScrollHeight >= componentTopHeight - 100) {
    if (props.appWidth >= 730) {
      return 'default-header-scroll';
    } else {
      return 'default-header';
    }
  } else {
    return 'default-header';
  }
});
</script>

<template>
  <div :class="[dynamicHeaderclass]">
    <div class="header-content">
      <div class="my-name-box">
        {{ myName }}
      </div>

      <div class="portfolio-menu-parent-box" v-show="appWidth >= 730">
        <div v-for="menu in portfolioMenu" :key="menu.menuName" class="child-box" @click="moveToContent(menu.id)">
          {{ menu.menuName }}
        </div>
      </div>

      <div v-show="appWidth <= 730" class="hamburger-menu-icon-box">
        <component :is="IconMenu2" class="icon" @click="() => (isNaviDrawer = true)" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
