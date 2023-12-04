<script lang="ts" setup>
const props = defineProps<{
  scrollHeight: number;
}>();

import Header from '@/components/layout/default/Header.vue';
import Footer from '@/components/layout/default/Footer.vue';
</script>

<template>
  <div class="default-layout">
    <Header :scrollHeight="scrollHeight" />
    <slot />
    <Footer />
  </div>
</template>

<style scoped lang="scss" src="@/assets/scss/layout.scss"></style>
