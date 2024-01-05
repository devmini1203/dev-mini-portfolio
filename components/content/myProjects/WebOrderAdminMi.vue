<script lang="ts" setup>
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const swiperModule = [Autoplay, Pagination, Navigation, EffectFade];
</script>

<template>
  <div class="projects-box-even">
    <div class="projects-img-box">
      <Swiper
        :loop="true"
        :effect="'fade'"
        :navigation="true"
        :modules="swiperModule"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: true
        }"
        :style="{
          'text-align': 'center',
          '--swiper-navigation-color': '#000000',
          '--swiper-navigation-size': '24px'
        }"
      >
        <SwiperSlide>
          <NuxtImg src="/img/projects/order_admin_mi/web_order_admin_mi_01.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/order_admin_mi/web_order_admin_mi_02.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/order_admin_mi/web_order_admin_mi_03.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/order_admin_mi/web_order_admin_mi_04.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
      </Swiper>

      <div class="important-message-box">※ 해당 프로젝트 이미지에 나타나는 모든 데이터는 임의로 생성한 목업 데이터 입니다. ※</div>
    </div>

    <div class="projects-desc-box">
      <div class="project-title-box">
        <span class="title-number">04.</span>
        &nbsp; 대리점 주문 관리자 사이트 리뉴얼
      </div>

      <div class="project-explan-box">
        <p>
          기존 Vue2와 Vuetify를 사용해 개발하였던 대리점 주문 관리자 사이트를 <span class="skill-emphasize">Nuxt3</span> 프레임워크와 UI 프레임워크인
          <span class="skill-emphasize">ElementPlus</span>를 사용하여 마이그레이션한 사이트 입니다.
        </p>

        <p>
          SSR에 대한 이해와 학습을 위해 기존 Vue2 프레임워크에 비해 AutoImport 등의 편리하고 강력한 기능들이 제공되는 Nuxt3 프레임워크와 당시 Vuetify3의 Beta
          버전 지원으로 인한 컴포넌트 지원이 부족했던점을 고려하여 TypeScript에 친화적인 ElementPlus를 채택하여 개발을 진행하였고, 이전 관리자 사이트를 사용하던
          유관부서에게 개선점 및 추가 요구사항 등을 요청 후 전달 받아 반영하였습니다.
        </p>

        <p>
          또한, SpringBoot와 PL/SQL을 사용한 백엔드 개발도 함께 맡아 진행하며 REST API에 대한 이해와 작성법 등을 배울 수 있었으며, 동시에 기존의 클라이언트 쿠키
          기반 인증 체계를 SpringSecurity와 JWT를 기반으로한 새로운 인증 체계로 대체함으로써 웹 보안을 향상시켰습니다.
          <br />
        </p>

        <p class="closing-ment">
          해당 프로젝트를 통해 SSR에 대한 이해와 Nuxt3 프레임워크의 동작 원리 및 사용법을 터득할 수 있었고 백엔드 개발을 함께 진행하며 클라이언트와 서버간의
          유연하고 원활한 통신을 위한 개발 능력을 함양할 수 있었던 소중한 경험이었습니다.
        </p>
      </div>

      <div class="project-detail-box">
        <div class="detail">
          <div class="label-box">참여 인원</div>
          <div class="value-box">1명</div>
        </div>
        <div class="detail">
          <div class="label-box">개발 기간</div>
          <div class="value-box">2023.06 ~ 2023.11</div>
        </div>
        <div class="detail">
          <div class="label-box">주요 기능</div>
          <div class="value-box">게시판 CRUD, 대리점 현황 관리, 고객 지원 관리, 제품 관리,판매 정보 수정,사양 문의 관리,주문 관리</div>
        </div>
        <div class="detail">
          <div class="label-box">Front-End</div>
          <div class="value-box">Nuxt3, ElementPlus, TypeScript, Vite</div>
        </div>
        <div class="detail">
          <div class="label-box">Back-End</div>
          <div class="value-box">OracleDB, PL/SQL, SpringBoot</div>
        </div>
        <div class="detail">
          <div class="label-box">Deployment</div>
          <div class="value-box">Nginx, PM2, Tomcat</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
