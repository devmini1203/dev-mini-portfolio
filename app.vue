<script lang="ts" setup>
import { useWindowScroll, useElementSize } from '@vueuse/core';

const appEl = ref(null);
const { width: appWidth } = useElementSize(appEl);
const { y: appScrollHeight } = useWindowScroll();
</script>

<template>
  <div ref="appEl">
    <NuxtLayout :appScrollHeight="appScrollHeight" :appWidth="appWidth">
      <NuxtPage :appWidth="appWidth" />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" src="@/assets/scss/app.scss"></style>
