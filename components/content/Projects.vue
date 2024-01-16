<script lang="ts" setup>
import Gathering from '@/components/content/myProjects/Gathering.vue';
import WebOrder from '@/components/content/myProjects/WebOrder.vue';
import Hr from '@/components/content/myProjects/Hr.vue';
import WebOrderAdminMi from '@/components/content/myProjects/WebOrderAdminMi.vue';
import Portfolio from '@/components/content/myProjects/Portfolio.vue';

const elementsStore = useElementsStore();
const projects = ref<HTMLElement | null>(null);

const navigateToGithub = () => {
  navigateTo('https://github.com/devmini1203/dev-mini-portfolio', {
    open: {
      target: '_blank'
    }
  });
};

onMounted(() => {
  elementsStore.projectsRef = projects.value;
});
</script>

<template>
  <div class="projects-container" ref="projects">
    <div class="projects-content-box">
      <div class="title-box">
        <span class="title"> PROJECTS </span>
      </div>

      <!-- 국내 공장 Gathering 사이트 -->
      <Gathering />

      <!-- 대리점 전용 주문 사이트 -->
      <WebOrder />

      <!-- 직접직 인사 정보 조회 사이트 -->
      <Hr />

      <!-- 대리점 주문 관리자 사이트 NUXT3 마이그레이션 -->
      <WebOrderAdminMi />

      <!-- 포트폴리오 사이트 -->
      <Portfolio @navigateToGithub="navigateToGithub" />
    </div>
  </div>
</template>

<style scoped></style>
