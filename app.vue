<script lang="ts" setup>
import { IconSquareRoundedArrowUpFilled } from '@tabler/icons-vue';
import { useWindowScroll, useElementSize } from '@vueuse/core';

const moveToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const appEl = ref(null);
const { width: appWidth } = useElementSize(appEl);
const { y: appScrollHeight } = useWindowScroll();
</script>

<template>
  <div id="app" ref="appEl">
    <NuxtLayout :appScrollHeight="appScrollHeight" :appWidth="appWidth">
      <NuxtPage :appWidth="appWidth" />
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
