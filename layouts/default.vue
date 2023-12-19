<script lang="ts" setup>
import Header from '@/components/layout/default/Header.vue';
import Footer from '@/components/layout/default/Footer.vue';

const props = defineProps<{
  appScrollHeight: number;
  appWidth: number;
}>();
</script>

<template>
  <div class="default-layout">
    <Header :appScrollHeight="appScrollHeight" :appWidth="appWidth" />
    <slot />
    <Footer />
  </div>
</template>

<style scoped src="@/assets/scss/layout.scss"></style>
