<script lang="ts" setup>
import { IconSquareRoundedArrowUpFilled } from '@tabler/icons-vue';

import Banner from '@/components/main/Banner.vue';
import Skills from '@/components/main/Skills.vue';
import Projects from '@/components/main/Projects.vue';
import Career from '@/components/main/Career.vue';
import AboutMe from '@/components/main/AboutMe.vue';

const moveToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

const scrollHeight = ref(0);
const setScrollHeight = () => {
  scrollHeight.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', setScrollHeight);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', setScrollHeight);
});
</script>

<template>
  <div id="app">
    <NuxtLayout :scrollHeight="scrollHeight">
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Career />
    </NuxtLayout>

    <!-- 최상단 스크롤 버튼  -->
    <Transition name="fade-in-out-move-to-top-button">
      <div class="move-to-top-button-container" v-if="scrollHeight >= 80">
        <component class="arrow-button" :is="IconSquareRoundedArrowUpFilled" @click="moveToTop" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" src="@/assets/scss/app.scss"></style>
