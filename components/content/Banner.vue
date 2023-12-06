<script lang="ts" setup>
import { IconChevronsDown } from '@tabler/icons-vue';

/**
 * About Me 컨텐츠로 이동
 */
const moveToAboutMeContent = () => {
  document.querySelector('.about-me-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
</script>

<template>
  <div class="banner-container">
    <div class="banner-title-box">
      <div class="top-text-box">Welocme!</div>

      <div class="bottom-text-box">JONGMIN'S PORTFOLIO</div>
    </div>

    <div class="next-content-button-box">
      <component :is="IconChevronsDown" class="chevrons-down-button" @click="moveToAboutMeContent"> </component>
    </div>
  </div>
</template>

<style scoped></style>
