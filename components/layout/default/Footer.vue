<script lang="ts" setup>
import { IconBrandGithub, IconMail, IconSquareLetterV } from '@tabler/icons-vue';

const footerContent = ref([
  { icon: IconBrandGithub, tooltipContent: 'Github', path: 'https://github.com/devmini1203' },
  { icon: IconMail, tooltipContent: 'Mail', path: 'mailto:devmini1203@gmail.com' },
  { icon: IconSquareLetterV, tooltipContent: 'Velog', path: 'https://velog.io/@devmini1203' }
]);
const navigateToAnotherSite = (path: string) => {
  navigateTo(path, {
    open: {
      target: '_blank'
    }
  });
};
</script>

<template>
  <div class="default-footer common-gradient-background">
    <div class="footer-icon-box">
      <el-tooltip effect="light" :content="content.tooltipContent" placement="top" v-for="content in footerContent" :key="content.path">
        <div class="footer-icon-wrapper">
          <component :is="content.icon" class="footer-icon" @click="navigateToAnotherSite(content.path)" />
        </div>
      </el-tooltip>
    </div>

    <div class="footer-copyright-box">© 2023. Baek Jong Min. All rights reserved.</div>
  </div>
</template>

<style scoped></style>
