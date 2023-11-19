<script lang="ts" setup>
import Header from '@/components/layout/default/Header.vue';
import Footer from '@/components/layout/default/Footer.vue';
import Drawer from '@/components/layout/default/Drawer.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="default-header">
        <Header />
      </el-header>
      <el-main>
        <slot />
      </el-main>
      <el-footer class="default-footer">
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped lang="scss" src="@/assets/scss/layout.scss"></style>
