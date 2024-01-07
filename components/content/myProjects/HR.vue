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
        :effect="'fade'"
        :navigation="true"
        :centered-slides="true"
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
          '--swiper-navigation-color': '#ffffff',
          '--swiper-navigation-size': '24px'
        }"
      >
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_01.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_02.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_03.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_04.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_05.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_06.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_07.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_08.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_09.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_10.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg src="/img/projects/hr/hr_renewal_11.png" provider="myProvider" class="swiper-img-hr" />
        </SwiperSlide>
      </Swiper>

      <div class="important-message-box">※ 해당 프로젝트 이미지에 나타나는 모든 데이터는 임의로 생성한 목업 데이터 입니다. ※</div>
    </div>

    <div class="projects-desc-box">
      <div class="project-title-box">
        <span class="title-number">03.</span>
        &nbsp; 직접직 인사 정보 조회 사이트
      </div>

      <div class="project-explan-box">
        <p>
          그룹웨어를 사용하지 못하는 직접직 근로자분들을 위해 손쉽게 자신의 인사 정보를 조회할 수 있는 모바일 전용 인사 정보 조회 사이트를 개발하여 수 많은
          근로자분들에게 편의성을 제공하였습니다
        </p>

        <p>
          이전 프로젝트들에서는 Vue2 프레임워크를 사용해왔지만, 해당 프로젝트에서는 Vue2의 지원 종료 이슈 대응 및 CompositionAPI 문법을 통한 효율적인 로직
          재사용과 간결한 코드 작성을 위해 <span class="skill-emphasize">Vue3</span> 프레임워크를 채택하여 개발을 진행하였고, 이와 동시에 차세대 빌드 도구인
          <span class="skill-emphasize">Vite</span>를 도입하여 개발 효율을 높였습니다. 또한, 동적 타입 언어인 JavaScript의 단점을 보완할 수 있는
          <span class="skill-emphasize">TypeScript</span>를 적용하여 개발 생산성을 향상시켰습니다.
        </p>

        <p class="closing-ment">
          이 프로젝트가 특히 기억에 남는 이유가 있다면 웹개발을 시작한 이후 처음으로 디자이너와 협업을 해보았기 때문인 것 같습니다.
          <br />
          디자이너와 <span class="skill-emphasize">Figma</span>를 통해 협업하며 Figma의 사용법을 익힐 수 있었으며, 사용자에게 더 나은 UI/UX를 제공하기 위해
          디자이너와 함께 논의하며 개발을 진행해 볼 수 있었습니다.
          <br />
          이를 통해, 디자이너와의 성공적인 협업은 사용자에게 보다 강력하고 우아한 UI/UX를 제공할 수 있다는 것을 느낄 수 있었습니다.
        </p>
      </div>

      <div class="project-detail-box">
        <div class="detail">
          <div class="label-box">참여 인원</div>
          <div class="value-box">2명</div>
        </div>
        <div class="detail">
          <div class="label-box">개발 기간</div>
          <div class="value-box">2022.10 ~ 2023.02</div>
        </div>
        <div class="detail">
          <div class="label-box">주요 기능</div>
          <div class="value-box">로그인, 로그아웃, 비밀번호 찾기, 아이디 기억, 자동 로그아웃, 연차 현황 조회, 사내 규정 조회, 급여명세서 조회, 메인 화면</div>
        </div>
        <div class="detail">
          <div class="label-box">Design</div>
          <div class="value-box">Figma</div>
        </div>
        <div class="detail">
          <div class="label-box">Front-End</div>
          <div class="value-box">Vue3, Vuetify, TypeScript, Vite</div>
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

<style scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
