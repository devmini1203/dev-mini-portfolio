<script lang="ts" setup>
import Banner from '@/components/content/Banner.vue';
import Skills from '@/components/content/Skills.vue';
import Projects from '@/components/content/Projects.vue';
import Career from '@/components/content/Career.vue';
import AboutMe from '@/components/content/AboutMe.vue';

const props = defineProps<{
  appWidth: number;
}>();
</script>

<template>
  <div>
    <Banner :appWidth="appWidth" />
    <AboutMe :appWidth="appWidth" />
    <Skills :appWidth="appWidth" />
    <Projects />
    <Career :appWidth="appWidth" />
  </div>
</template>

<style></style>
