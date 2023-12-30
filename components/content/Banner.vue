<script lang="ts" setup>
import { IconChevronsDown } from '@tabler/icons-vue';

const elementsStore = useElementsStore();
const bannerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  elementsStore.bannerRef = bannerRef.value;
});
</script>

<template>
  <div class="banner-container common-gradient-background" ref="bannerRef">
    <div class="confetti-container">
      <div class="confetti" v-for="n in 40"></div>
    </div>

    <div class="banner-title-box">
      <div class="top-text-box">WELCOME!</div>

      <div class="bottom-text-box">JONGMIN'S PORTFOLIO</div>
    </div>

    <div class="next-content-button-box">
      <component :is="IconChevronsDown" class="chevrons-down-button" @click="() => elementsStore.aboutMeRef?.scrollIntoView({ behavior: 'smooth' })">
      </component>
    </div>
  </div>
</template>

<style scoped></style>
