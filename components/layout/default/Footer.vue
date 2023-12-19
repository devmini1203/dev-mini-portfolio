<script lang="ts" setup>
import { IconBrandGithub, IconMail, IconSquareLetterV } from '@tabler/icons-vue';

const footerIcon = ref([
  { icon: IconBrandGithub, toolTipEffect: '', toolTipContent: '', toolTipPlacement: '' },
  { icon: IconMail, toolTipEffect: '', toolTipContent: '', toolTipPlacement: '' },
  { icon: IconSquareLetterV, toolTipEffect: '', toolTipContent: '', toolTipPlacement: '' }
]);
</script>

<template>
  <div class="default-footer gradient-background">
    <div class="footer-icon-box">
      <el-tooltip class="box-item" effect="light" content="Github" placement="top">
        <a href="https://github.com/devmini1203" target="_blank">
          <component :is="IconBrandGithub" class="footer-icon" />
        </a>
      </el-tooltip>

      <el-tooltip class="box-item" effect="light" content="Mail" placement="top">
        <a href="mailto:devmini1203@gmail.com" target="_blank">
          <component :is="IconMail" class="footer-icon" />
        </a>
      </el-tooltip>

      <el-tooltip class="box-item" effect="light" content="Velog" placement="top">
        <a href="https://velog.io/@devmini1203" target="_blank">
          <component :is="IconSquareLetterV" class="footer-icon" />
        </a>
      </el-tooltip>
    </div>

    <div class="footer-copyright-box">© 2023. Baek Jong Min. All rights reserved.</div>
  </div>
</template>

<style scoped></style>
