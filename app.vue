<script lang="ts" setup>
import { IconSquareRoundedArrowUpFilled } from '@tabler/icons-vue';
import { useScroll } from '@vueuse/core';

const moveToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const scrollHeight = ref(0);
const setScrollHeight = () => {
  scrollHeight.value = window.scrollY;
};

/**
 * 스크롤 이벤트 등록
 */
onMounted(() => {
  window.addEventListener('scroll', setScrollHeight);
});
/**
 * 스크롤 이벤트 제거
 */
onBeforeUnmount(() => {
  window.removeEventListener('scroll', setScrollHeight);
});

const appEl = ref<HTMLElement | null>(null);
const { x, y, isScrolling, arrivedState, directions } = useScroll(appEl);

const displayY = computed({
  get() {
    return y.value.toFixed(1);
  },
  set(val) {
    y.value = Number.parseFloat(val);
  }
});
console.log(displayY.value);
</script>

<template>
  <div id="app" ref="appEl">
    <NuxtLayout :scrollHeight="scrollHeight">
      <NuxtPage />
    </NuxtLayout>

    <!-- 최상단 이동 버튼  -->
    <Transition name="fade-in-out-move-to-top-button">
      <div class="move-to-top-button-container" v-if="scrollHeight >= 80">
        <component class="arrow-button" :is="IconSquareRoundedArrowUpFilled" @click="moveToTop" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" src="@/assets/scss/app.scss"></style>
