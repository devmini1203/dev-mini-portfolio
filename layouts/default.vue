<script lang="ts" setup>
import Header from '@/components/layout/default/Header.vue';
import Footer from '@/components/layout/default/Footer.vue';

const props = defineProps<{
  scrollHeight: number;
}>();
</script>

<template>
  <div class="default-layout">
    <Header :scrollHeight="scrollHeight" />
    <slot />
    <Footer />
  </div>
</template>

<style scoped src="@/assets/scss/layout.scss"></style>
