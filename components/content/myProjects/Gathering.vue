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
  <div class="projects-box">
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
          <NuxtImg src="/img/projects/gathering/web_gathering_01.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/gathering/web_gathering_02.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/gathering/web_gathering_03.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/gathering/web_gathering_04.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/gathering/web_gathering_05.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/gathering/web_gathering_06.png" class="swiper-img" provider="myProvider" />
        </SwiperSlide>
      </Swiper>

      <div class="important-message-box">※ 해당 프로젝트 이미지에 나타나는 모든 데이터는 임의로 생성한 목업 데이터 입니다. ※</div>
    </div>

    <div class="projects-desc-box">
      <div class="project-title-box">
        <span class="title-number">01.</span>
        &nbsp; 국내 공장 Gathering 사이트
      </div>

      <div class="project-explan-box">
        <p>
          오토닉스는 생산직 근로자분들에게 C#으로 개발된 실적 등록 및 공정 관리 프로그램을 윈도우 테블릿에서 제공하고 있었습니다. 그러나 계속되는 윈도우
          테블릿의 가격 상승 및 향후 공급 불안정이 예상되어, 비교적 저렴한 안드로이드 테블릿으로의 전환이 필요하게 되었습니다.
        </p>
        <p>
          이에 따라, <span class="skill-emphasize">Vue2</span> 프레임워크와 UI프레임워크인 <span class="skill-emphasize">BootstrapVue</span>를 사용하여 C#
          프로그램을 웹 환경으로 전환하는 프로젝트에서 프론트엔드 개발을 맡아 진행하게 되었습니다.
        </p>

        <p>
          카카오 오븐을 통한 UI 설계부터 시작해 다양한 프론트엔드 비지니스 로직을 작성하며 VUE2 프레임워크에 익숙해질 수 있었고 다양한 모바일 환경을 위한 반응형
          UI 구현을 진행해보는 좋은 경험도 할 수 있었으며
          <span class="skill-emphasize">SVN</span>을 이용한 협업을 통해, 형상관리의 중요성도 몸소 느낄 수 있었습니다.
        </p>

        <p>또한 현장 관리자들과의 소통을 통해, 다양한 요구 사항 및 오류에 대응하며 CS와 QA 업무의 중요성도 느끼게 되었습니다.</p>

        <p class="closing-ment">
          첫 실무 프로젝트이자 혼자서 프론트엔드를 담당했다보니 실수도 많았고 사용자 입장에서 고려되지 못한 UI/UX 등 아쉬움이 많은 프로젝트입니다.
          <br />
          하지만 웹 개발 직군을 선택한 것이 옳은 결정이었음을 다시 한번 느끼게 해줄 정도의 즐거움과 만족감을 느끼게 해준 프로젝트였으며, 자바스크립트 기본기를
          탄탄히 다지게 해주었고 VUE2 프레임워크의 숙련도를 높여준 고마운 프로젝트임에는 틀림없습니다.
        </p>
      </div>

      <div class="project-detail-box">
        <div class="detail">
          <div class="label-box">참여 인원</div>
          <div class="value-box">2명</div>
        </div>
        <div class="detail">
          <div class="label-box">개발 기간</div>
          <div class="value-box">2021.02 ~ 2021.09</div>
        </div>
        <div class="detail">
          <div class="label-box">주요 기능</div>
          <div class="value-box">
            실적 등록, 작업 지시 검색, 작업자 전환 기능, 자재 등록 및 관리, 실적 확인, 불량/폐기 등록 및 관리, 가상 키패드, 작업자 추가, 작업지도서 확인
          </div>
        </div>
        <div class="detail">
          <div class="label-box">Front-End</div>
          <div class="value-box">Vue2, BootstrapVue, JavaScript, Webpack</div>
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
