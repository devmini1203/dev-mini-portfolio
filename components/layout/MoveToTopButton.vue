<script lang="ts" setup>
import { IconSquareRoundedArrowUpFilled } from '@tabler/icons-vue';

const props = defineProps<{
  appScrollHeight: number;
}>();

const moveToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
</script>

<template>
  <Transition name="fade-in-out-move-to-top-button">
    <div class="move-to-top-button-wrapper" v-if="appScrollHeight >= 80">
      <component class="icon" :is="IconSquareRoundedArrowUpFilled" @click="moveToTop" />
    </div>
  </Transition>
</template>

<style scoped></style>
