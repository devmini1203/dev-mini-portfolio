<script lang="ts" setup>
import { IconChevronsDown } from '@tabler/icons-vue';

const props = defineProps<{
  appWidth: number;
}>();

const elementsStore = useElementsStore();
const bannerRef = ref<HTMLElement | null>(null);

const dynamicBannerClass = computed(() => {
  if (props.appWidth >= 730) {
    return 'banner-container';
  } else {
    return 'banner-container-minimize';
  }
});

onMounted(() => {
  elementsStore.bannerRef = bannerRef.value;
});

//.banner-title-box-minimize
</script>

<template>
  <div :class="[dynamicBannerClass, 'common-gradient-background']" ref="bannerRef">
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
