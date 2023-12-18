<script lang="ts" setup>
import Header from '@/components/layout/default/Header.vue';
import Footer from '@/components/layout/default/Footer.vue';

const props = defineProps<{
  appScrollHeight: number;
}>();
</script>

<template>
  <div class="default-layout">
    <Header :appScrollHeight="appScrollHeight" />
    <slot />
    <Footer />
  </div>
</template>

<style scoped src="@/assets/scss/layout.scss"></style>
