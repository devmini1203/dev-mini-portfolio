<script lang="ts" setup>
import { IconSquareRoundedArrowUpFilled } from '@tabler/icons-vue';

import Banner from '@/components/content/Banner.vue';
import Skills from '@/components/content/Skills.vue';
import Projects from '@/components/content/Projects.vue';
import Career from '@/components/content/Career.vue';
import AboutMe from '@/components/content/AboutMe.vue';

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
</script>

<template>
  <div id="app">
    <NuxtLayout :scrollHeight="scrollHeight" name="default">
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Career />
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
