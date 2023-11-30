<script lang="ts" setup>
import useCommonComposable from '@/composables/commonComposable';

const { queryBinder } = useCommonComposable();

const router = useRouter();

const myName = ref('Jong Min');
const portfolioMenu = ref([
  { menuName: 'About me', query: 'aboutMe' },
  { menuName: 'Skills', query: 'skills' },
  { menuName: 'Projects', query: 'projects' },
  { menuName: 'Career', query: 'career' }
]);

const getComponentNameToQuery = (query: string) => {
  router.push({ path: '/', query: { co: query } });
};
</script>

<template>
  <div class="default-header">
    <div class="my-name-box">
      {{ myName }}
    </div>

    <div class="portfolio-menu-parent-box">
      <div v-for="menu in portfolioMenu" :key="menu.menuName" class="child-box" @click="getComponentNameToQuery(menu.query)">
        {{ menu.menuName }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
