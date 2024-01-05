<script lang="ts" setup>
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const swiperModule = [Autoplay, Pagination, Navigation, EffectFade];

const emits = defineEmits(['navigateToGithub']);
</script>

<template>
  <div class="projects-box" style="margin-bottom: 0">
    <div class="projects-img-box">
      <Swiper
        :loop="true"
        :navigation="true"
        :effect="'fade'"
        :modules="swiperModule"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false
        }"
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-size': '24px'
        }"
        :pagination="{
          clickable: true
        }"
      >
        <SwiperSlide>
          <NuxtImg src="/img/projects/portfolio/banner.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/portfolio/aboutme.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/portfolio/skills.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/portfolio/projects.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/portfolio/career.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="projects-desc-box">
      <div class="project-title-box">
        <span class="title-number">05. </span>
        &nbsp; 포트폴리오 사이트
      </div>

      <div class="project-explan-box">
        <p><span class="skill-emphasize">Nuxt3</span> 프레임워크를 사용해 제작한 포트폴리오 사이트입니다.</p>
        <p>
          저에 대한 간략한 소개, 제가 경험하고 배웠던 소중한 스킬들, 진행했던 프로젝트에 대한 소개, 재직 경력 등을 한 눈에 볼 수 있도록 제작한 포트폴리오 사이트
          입니다.
        </p>
        <p class="closing-ment">향후 보완하거나 추가할 사항이 생기면 주기적으로 업데이트 할 예정입니다.</p>
      </div>

      <div class="project-detail-box">
        <div class="detail">
          <div class="label-box">참여 인원</div>
          <div class="value-box">1명</div>
        </div>
        <div class="detail">
          <div class="label-box">개발 기간</div>
          <div class="value-box">2023.01 ~ 2023.08</div>
        </div>
        <div class="detail">
          <div class="label-box">주요 기능</div>
          <div class="value-box">자기 소개, 보유 기술 스택, 프로젝트 소개, 재직 경력 등</div>
        </div>
        <div class="detail">
          <div class="label-box">Front-End</div>
          <div class="value-box">Nuxt3, ElementPlus, TypeScript, Vite</div>
        </div>
        <div class="detail">
          <div class="label-box">Deployment</div>
          <div class="value-box">Github</div>
        </div>
      </div>

      <div class="more-button-box">
        <el-button class="github-button" @click="() => emits('navigateToGithub')" color="#ffffff" :round="true"> Github 보기 </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
