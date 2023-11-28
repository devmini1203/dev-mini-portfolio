<script lang="ts" setup>
import Header from '@/components/layout/default/Header.vue';
import Footer from '@/components/layout/default/Footer.vue';

const ch = () => {
  console.log('ccc');
};
</script>

<template>
  <div class="default-layout">
    <el-container>
      <el-header>
        <Header @ch="ch" />
      </el-header>
      <el-main>
        <slot 2 />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped lang="scss" src="@/assets/scss/layout.scss"></style>
