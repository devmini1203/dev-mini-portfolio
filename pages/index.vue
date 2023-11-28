<script lang="ts" setup>
import Banner from '@/components/main/Banner.vue';
import Skills from '@/components/main/Skills.vue';
import Projects from '@/components/main/Projects.vue';
import Career from '@/components/main/Career.vue';

const bannerRef = ref(null);
const skillsRef = ref(null);
const projectsRef = ref(null);
const careerRef = ref(null);
</script>

<template>
  <Banner ref="bannerRef" />
  <Skills ref="skillsRef" />
  <Projects ref="projectsRef" />
  <Career ref="careerRef" />
</template>

<style scoped lang="scss"></style>
