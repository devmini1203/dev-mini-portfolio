<script lang="ts" setup>
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const swiperModule = [Autoplay, Pagination, Navigation, EffectFade];

const elementsStore = useElementsStore();
const projects = ref<HTMLElement | null>(null);

const navigateToGithub = () => {
  navigateTo('https://github.com/devmini1203/dev_mini_portfolio', {
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
              <NuxtImg src="/img/projects/gathering/web_gathering_01.png" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/gathering/web_gathering_02.png" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/gathering/web_gathering_03.png" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/gathering/web_gathering_04.png" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/gathering/web_gathering_05.png" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/gathering/web_gathering_06.png" class="swiper-img" />
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
              카카오 오븐을 통한 UI 설계부터 시작해 다양한 프론트엔드 비지니스 로직을 작성하며 VUE2 프레임워크에 익숙해질 수 있었고 다양한 모바일 환경을 위한
              반응형 UI 구현을 진행해보는 좋은 경험도 할 수 있었으며
              <span class="skill-emphasize">SVN</span>을 이용한 협업을 통해, 형상관리의 중요성도 몸소 느낄 수 있었습니다.
            </p>

            <p>또한 현장 관리자들과의 소통을 통해, 다양한 요구 사항 및 오류에 대응하며 CS와 QA 업무의 중요성도 느끼게 되었습니다.</p>

            <p class="closing-ment">
              첫 실무 프로젝트이자 혼자서 프론트엔드를 담당했다보니 실수도 많았고 돌아보면 우아하지 못한 UI/UX 등 아쉬움이 많은 프로젝트입니다.
              <br />
              하지만 웹 개발 직군을 선택한 것이 옳은 결정이었음을 다시 한번 느끼게 해줄 정도의 즐거움과 만족감을 느끼게 해준 프로젝트였으며, 자바스크립트
              기본기를 탄탄히 다지게 해주었고 VUE2 프레임워크의 숙련도를 높여준 고마운 프로젝트임에는 틀림없습니다.
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

      <!-- 대리점 전용 웹주문 사이트 -->
      <div class="projects-box-even">
        <div class="projects-img-box">
          <Swiper
            :loop="true"
            :navigation="true"
            :modules="swiperModule"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false
            }"
            :pagination="{
              clickable: true
            }"
          >
            <SwiperSlide><p>1</p></SwiperSlide>
            <SwiperSlide><p>2</p></SwiperSlide>
            <SwiperSlide><p>3</p></SwiperSlide>
            <SwiperSlide><p>4</p></SwiperSlide>
            <SwiperSlide><p>5</p></SwiperSlide>
            <SwiperSlide><p>6</p></SwiperSlide>
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
              오라클DB 내부에서 작성된 HTML로 인한 웹 보안 취약점, UI/UX를 고려하지 않은 디자인, 향후 유지보수에 어려움이 예상되어 PL/SQL 기반의 대리점 전용
              주문 사이트를
              <span class="skill-emphasize">Vue2</span> 프레임워크와 UI 프레임워크인 <span class="skill-emphasize">Vuetify</span>를 사용하여 마이그레이션한
              사이트 입니다.
            </p>

            <p>
              Vue UI 프레임워크 중 가장 사랑 받고 있는 Vuetify를 채택하여 개발을 진행하였고 이를 통해 Vuetify의 사용법 및 다양한 활용법을 익힐 수 있었으며,
              마이그레이션 이전 사이트에서는 존재하지 않았던 다양한 신규 기능들<component :is=""></component>을 개발하여 제공함으로써 수 많은 대리점과 이를
              관리하는 영업관리팀 간의 업무 효율을 향상 시켜 더욱 원활한 업무 프로세스를 구축할 수 있도록 기여했습니다.
            </p>

            <p class="closing-ment">
              해당 프로젝트를 통해 처음으로 B2B 서비스를 개발하며 B2B 서비스에 대한 이해와 안정적이고 원활한 서비스 제공을 위한 개발 역량을 향상시킬수
              있었습니다.
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
                제품 주문, 월/연 달성률 및 매입 현황 시각화, 다크 모드, 테이블 데이터 엑셀 다운로드, 고객 등록 및 관리, 배송 인수 확인, 품목 조회, 성적서 발행,
                거래/여신 정보 PDF 다운로드 및 뷰어 제공, 자사 관련 웹사이트 바로 가기 제공
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

      <!-- 직접직 인사 정보 조회 사이트 -->
      <!--     :centeredSlides="true"
            :slidesPerView="2" -->
      <div class="projects-box">
        <div class="projects-img-box">
          <Swiper
            :loop="true"
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
              '--swiper-navigation-color': '#ffffff',
              '--swiper-navigation-size': '24px'
            }"
          >
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_01.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_02.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_03.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_04.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_05.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_06.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_07.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_08.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_09.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_10.png" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/hr/hr_renewal_11.png" />
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
              <div class="value-box">
                로그인, 로그아웃, 비밀번호 찾기, 아이디 기억, 자동 로그아웃, 연차 현황 조회, 사내 규정 조회, 급여명세서 조회, 메인 화면
              </div>
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

      <!-- 대리점 주문 관리자 사이트 NUXT3 마이그레이션 -->
      <div class="projects-box-even">
        <div class="projects-img-box">
          <Swiper
            :loop="true"
            :navigation="true"
            :modules="swiperModule"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false
            }"
            :pagination="{
              clickable: true
            }"
          >
            <SwiperSlide><p>1</p></SwiperSlide>
            <SwiperSlide><p>2</p></SwiperSlide>
            <SwiperSlide><p>3</p></SwiperSlide>
            <SwiperSlide><p>4</p></SwiperSlide>
            <SwiperSlide><p>5</p></SwiperSlide>
            <SwiperSlide><p>6</p></SwiperSlide>
          </Swiper>

          <div class="important-message-box">※ 해당 프로젝트 이미지의 모든 데이터는 임의로 생성한 목업 데이터 입니다. ※</div>
        </div>

        <div class="projects-desc-box">
          <div class="project-title-box">
            <span class="title-number">04.</span>
            &nbsp; 대리점 주문 관리자 사이트 리뉴얼
          </div>

          <div class="project-explan-box">
            <p>
              오토닉스는 생산직 근로자분들에게 C#으로 개발된 실적 등록 및 공정 관리 프로그램을 윈도우 테블릿에서 제공하고 있었습니다. 그러나 계속되는 윈도우
              테블릿의 가격 상승 및 향후 공급 불안정이 예상되어, 비교적 저렴한 안드로이드 테블릿으로의 전환이 필요하게 되었고
            </p>
            <p>
              이에 따라, <span class="skill-emphasize">VUE2</span> 프레임워크와 UI프레임워크인 <span class="skill-emphasize">BootstrapVue</span>를 사용하여 C#
              프로그램을 웹 환경으로 전환하는 프로젝트에서 프론트엔드 개발을 맡아 진행하게 되었습니다.
            </p>

            <p>
              카카오 오븐을 통한 UI 설계부터 시작해 다양한 프론트엔드 비지니스 로직을 작성하며 VUE2 프레임워크에 익숙해질 수 있었고 다양한 모바일 환경을 위한
              반응형 UI 구현을 진행하는 좋은 경험도 할 수 있었으며
              <span class="skill-emphasize">SVN</span>을 이용한 협업을 통해, 형상관리의 중요성도 몸소 느낄 수 있었습니다.
            </p>

            <p>또한 현장 관리자들과의 소통을 통해, 다양한 요구 사항 및 오류에 대응하며 CS와 QA 업무의 중요성도 느끼게 되었습니다.</p>

            <p class="closing-ment">
              첫 실무 프로젝트이자 혼자서 프론트엔드를 담당했다보니 실수도 많았고 돌아보면 아쉬움도 많은 프로젝트입니다. 하지만 웹 개발 직군을 선택한 것이 옳은
              결정이었음을 다시 한번 느끼게 해줄 정도의 즐거움과 만족감을 느끼게 해준 프로젝트였으며, 자바스크립트 기본기를 탄탄히 다지게 해주었고 VUE2
              프레임워크의 숙련도를 높여준 고마운 프로젝트임에는 틀림없습니다.
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
              <div class="value-box"></div>
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

      <!-- 포트폴리오 사이트 -->
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
              <NuxtImg src="/img/projects/portfolio/banner.png" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/portfolio/aboutme.png" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/portfolio/skills.png" class="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/img/projects/portfolio/projects.png" class="swiper-img" />
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
              저에 대한 간략한 소개, 제가 경험하고 배웠던 소중한 스킬들, 진행했던 프로젝트에 대한 소개, 재직 경력 등을 한 눈에 볼 수 있도록 제작한 포트폴리오
              사이트 입니다.
            </p>

            <p>향후 보완하거나 추가할 사항이 생기면 주기적으로 업데이트 할 예정입니다.</p>
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
            <el-button class="github-button" @click="navigateToGithub" color="#ffffff" :round="true"> Github 보기 </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
