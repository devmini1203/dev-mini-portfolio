<script lang="ts" setup>
const props = defineProps<{ scrollHeight: number }>();

const myName = ref('Jong Min');
const portfolioMenu = ref([
  { menuName: 'About me', id: 1 },
  { menuName: 'Skills', id: 2 },
  { menuName: 'Projects', id: 3 },
  { menuName: 'Career', id: 4 }
]);

const getComponentNameToQuery = (id: number) => {
  if (id === 1) {
    document.querySelector('.about-me-container')?.scrollIntoView({ behavior: 'smooth' });
  }
  if (id === 2) {
    document.querySelector('.skills-container')?.scrollIntoView({ behavior: 'smooth' });
  }
  if (id === 3) {
    document.querySelector('.projects-container')?.scrollIntoView({ behavior: 'smooth' });
  }
  if (id === 4) {
    document.querySelector('.career-container')?.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div :class="scrollHeight >= 800 ? 'default-header-scroll' : 'default-header'">
    <div class="header-content">
      <div class="my-name-box">
        {{ myName }}
      </div>

      <div class="portfolio-menu-parent-box">
        <div v-for="menu in portfolioMenu" :key="menu.menuName" class="child-box" @click="getComponentNameToQuery(menu.id)">
          {{ menu.menuName }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
