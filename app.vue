<script lang="ts" setup>
import { IconSquareRoundedArrowUpFilled } from '@tabler/icons-vue';
import { useWindowScroll } from '@vueuse/core';

const moveToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const { y: appScrollHeight } = useWindowScroll();
</script>

<template>
  <div id="app">
    <NuxtLayout :appScrollHeight="appScrollHeight">
      <NuxtPage />
    </NuxtLayout>

    <!-- 최상단 이동 버튼  -->
    <Transition name="fade-in-out-move-to-top-button">
      <div class="move-to-top-button-container" v-if="appScrollHeight >= 80">
        <component class="arrow-button" :is="IconSquareRoundedArrowUpFilled" @click="moveToTop" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" src="@/assets/scss/app.scss"></style>
