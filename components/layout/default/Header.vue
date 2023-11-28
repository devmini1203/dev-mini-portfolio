<script lang="ts" setup>
const myName = ref('Jong Min');
const portfolioMenu = ref([{ menuName: 'About me' }, { menuName: 'Skills' }, { menuName: 'Projects' }, { menuName: 'Career' }]);

const emits = defineEmits(['ch']);

const ch = () => {
  emits('ch');
};
</script>

<template>
  <div class="default-header">
    <div class="my-name-box">
      {{ myName }}
    </div>

    <div class="portfolio-menu-parent-box">
      <div v-for="menu in portfolioMenu" :key="menu.menuName" class="child-box" @click="ch">
        {{ menu.menuName }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
