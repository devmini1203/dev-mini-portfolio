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
        :navigation="true"
        :effect="'fade'"
        :modules="swiperModule"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false
        }"
        :style="{
          '--swiper-navigation-color': '#000000',
          '--swiper-pagination-color': '#000000',
          '--swiper-navigation-size': '24px'
        }"
        :pagination="{
          clickable: true
        }"
      >
        <SwiperSlide>
          <NuxtImg src="/img/projects/order/web_order_01.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/order/web_order_02.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/order/web_order_03.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/order/web_order_04.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/order/web_order_05.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/order/web_order_06.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/order/web_order_07.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
      </Swiper>

      <div class="important-message-box">※ 해당 프로젝트 이미지에 나타나는 모든 데이터는 임의로 생성한 목업 데이터 입니다. ※</div>
    </div>

    <div class="projects-desc-box">
      <div class="project-title-box">
        <span class="title-number">02. </span>
        &nbsp; 대리점 전용 주문 사이트
      </div>

      <div class="project-explan-box">
        <p>
          오라클DB 내부에서 작성된 HTML로 인한 웹 보안 취약점, UI/UX를 고려하지 않은 디자인, 향후 유지보수에 어려움이 예상되어 PL/SQL 기반의 대리점 전용 주문
          사이트를
          <span class="skill-emphasize">Vue2</span> 프레임워크와 UI 프레임워크인 <span class="skill-emphasize">Vuetify</span>를 사용하여 마이그레이션한 사이트
          입니다.
        </p>

        <p>
          Vue UI 프레임워크 중 가장 사랑 받고 있는 Vuetify를 채택하여 개발을 진행하였고 이를 통해 Vuetify의 사용법 및 다양한 활용법을 익힐 수 있었으며,
          마이그레이션 이전 사이트에서는 존재하지 않았던 다양한 신규 기능들을 개발하여 제공함으로써 수 많은 대리점과 이를 관리하는 영업관리팀 간의 업무 효율을
          향상 시켜 더욱 원활한 업무 프로세스를 구축할 수 있도록 기여했습니다.
        </p>

        <p class="closing-ment">
          해당 프로젝트를 통해 처음으로 B2B 서비스를 개발하며 B2B 서비스에 대한 이해와 안정적이고 원활한 서비스 제공을 위한 개발 역량을 향상시킬수 있었습니다.
          더불어 주문 사이트를 위한 관리자 사이트 마이그레이션도 동시에 진행하며 WBS 작성법 및 개발 일정 관리 능력 또한 함양할 수 있었습니다.
        </p>
      </div>

      <div class="project-detail-box">
        <div class="detail">
          <div class="label-box">참여 인원</div>
          <div class="value-box">2명</div>
        </div>
        <div class="detail">
          <div class="label-box">개발 기간</div>
          <div class="value-box">2022.01 ~ 2022.08</div>
        </div>
        <div class="detail">
          <div class="label-box">주요 기능</div>
          <div class="value-box">
            제품 주문, 제품 조회, 견적 시스템, 월/연 달성률 및 매입 현황 시각화, 다크 모드, 테이블 데이터 엑셀 다운로드, 공지 팝업, 고객 등록 및 관리, 배송 인수
            확인, 품목 조회, 성적서 발행, 거래/여신 정보 PDF 다운로드 및 뷰어 제공, 자사 관련 웹사이트 바로 가기, 사용자 가이드, 게시판 CRUD
          </div>
        </div>
        <div class="detail">
          <div class="label-box">Front-End</div>
          <div class="value-box">Vue2, Vuetify, JavaScript, Webpack</div>
        </div>
        <div class="detail">
          <div class="label-box">Back-End</div>
          <div class="value-box">OracleDB, PL/SQL, SpringBoot</div>
        </div>
        <div class="detail">
          <div class="label-box">Deployment</div>
          <div class="value-box">Nginx, Tomcat</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
