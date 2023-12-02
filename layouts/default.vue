<script lang="ts" setup>
const props = defineProps<{
  scrollHeight: number;
}>();

import Header from '@/components/layout/default/Header.vue';
import Footer from '@/components/layout/default/Footer.vue';
</script>

<template>
  <div class="default-layout">
    <el-container>
      <Header :scrollHeight="scrollHeight" />
      <el-main>
        <slot />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped lang="scss" src="@/assets/scss/layout.scss"></style>
