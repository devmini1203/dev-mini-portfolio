<script lang="ts" setup>
import Banner from '@/components/main/Banner.vue';
import Skills from '@/components/main/Skills.vue';
import Projects from '@/components/main/Projects.vue';
import Career from '@/components/main/Career.vue';
import AboutMe from '@/components/main/AboutMe.vue';

import { IconSquareRoundedArrowUpFilled } from '@tabler/icons-vue';

const router = useRouter();

const routeQuery = computed(() => {
  return router.currentRoute.value.query.co;
});

const bannerRef = ref<HTMLElement | null>(null);
const aboutMeRef = ref<HTMLElement | null>(null);
const skillsRef = ref<HTMLElement | null>(null);
const projectsRef = ref<HTMLElement | null>(null);
const careerRef = ref<HTMLElement | null>(null);

const moveToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

watch(
  () => routeQuery.value,
  (newVal, oldVal) => {
    if (newVal === 'aboutMe') aboutMeRef.value?.scrollIntoView({ behavior: 'smooth' });
    if (newVal === 'skills') skillsRef.value?.scrollIntoView({ behavior: 'smooth' });
    if (newVal === 'projects') projectsRef.value?.scrollIntoView({ behavior: 'smooth' });
    if (newVal === 'career') careerRef.value?.scrollIntoView({ behavior: 'smooth' });
  }
);
</script>

<template>
  <div ref="bannerRef">
    <Banner />
  </div>
  <div ref="aboutMeRef">
    <AboutMe />
  </div>
  <div ref="skillsRef">
    <Skills />
  </div>
  <div ref="projectsRef">
    <Projects />
  </div>
  <div ref="careerRef">
    <Career />
  </div>

  <!-- 최상단 스크롤 버튼  -->
  <div class="move-to-top-button-container">
    <component class="arrow-button" :is="IconSquareRoundedArrowUpFilled" @click="moveToTop" />
  </div>
</template>

<style lang="scss" src="@/assets/scss/main.scss"></style>
