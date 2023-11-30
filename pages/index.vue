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

watch(
  () => routeQuery.value,
  (newValue, old) => {
    if (newValue === 'aboutMe') aboutMeRef.value?.scrollIntoView({ behavior: 'smooth' });
    if (newValue === 'skills') skillsRef.value?.scrollIntoView({ behavior: 'smooth' });
    if (newValue === 'projects') projectsRef.value?.scrollIntoView({ behavior: 'smooth' });
    if (newValue === 'career') careerRef.value?.scrollIntoView({ behavior: 'smooth' });
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

  <div style="position: fixed; bottom: 10px; right: 10px">
    <component :is="IconSquareRoundedArrowUpFilled" style="width: 40px; height: 40px" />
  </div>
</template>

<style scoped lang="scss"></style>
