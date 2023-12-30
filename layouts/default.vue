<script lang="ts" setup>
import Header from '@/components/layout/default/Header.vue';
import Footer from '@/components/layout/default/Footer.vue';
import NavigationDrawer from '@/components/layout/default/NavigationDrawer.vue';
import MoveToTopButton from '@/components/layout/MoveToTopButton.vue';

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
    <NavigationDrawer :appWidth="appWidth" />

    <!-- 최상단 이동 버튼  -->
    <MoveToTopButton :appScrollHeight="appScrollHeight" />
  </div>
</template>

<style scoped src="@/assets/scss/layout.scss"></style>
