<script lang="ts" setup>
const dayjs = useDayjs();
const currentDay = `${dayjs().format('YYYY')}년 ${dayjs().format('MM')}월 ${dayjs().format('DD')}일`;

const careerHistory = ref([
  {
    title: '▎국내 공장 Gathering 프로그램 웹 환경으로 전환',
    devPeriod: '2021년 02월 01일 ~ 2021년 09월 16일',
    devList: [
      'C# 으로 개발된 Gathering 프로그램을 웹 환경으로 전환하기 위한 분석',
      '카카오 오븐을 사용해 UI 설계 및 프로토타입 제작',
      'VUE2 프레임워크를 사용해 개발',
      'Axios를 통한 SpringBoot 와의 RestAPI 통신 구현',
      '테블릿 환경에서의 원활한 동작을 위한 반응형 UI를 BootstrapVue를 사용해 구현',
      'VUEX를 사용해 작업자 정보 관리 구현',
      '환경 변수를 활용하여 dev,test,prod 개발 환경을 구분함을 통해 편의성 향상',
      'Nginx와 Tomcat을 사용하여 프로젝트 배포 및 SSL 적용'
    ]
  },
  {
    title: '▎웹 Gathering 중국,베트남 공장 수평 전개',
    devPeriod: '2021년 10월 15일 ~ 2021년 12월 6일',
    devList: [
      'Web Gathering이 국내 공장에 성공적으로 적용됨으로써 해외 공장 수평 전개',
      'vue-i18n을 사용해 다국어 처리',
      'UI/UX를 각 국가의 언어 길이를 고려하여 수정된 디자인 적용'
    ]
  },
  {
    title: '▎대리점 웹주문 사이트 및 관리자 사이트 VUE2 마이그레이션',
    devPeriod: '2022년 1월 3일 ~ 2022년 8월 1일',
    devList: [
      'PL/SQL로 개발된 대리점 전용 주문 사이트와 관리자 사이트를 VUE2로 마이그레이션',
      'Vuetify를 사용해 반응형 UI 구현',
      'C#으로 개발된 접속 폼에서 전달해주는 토큰을 통한 로그인 시스템 구현',
      '보안을 위한 자동 로그아웃 기능 개발',
      '중첩 라우팅 적용',
      '특정 제품군 견적 시스템 추가',
      'Vuetify를 사용해 Dark Theme, Light Theme 스위칭 구현 및 적용',
      'ApexChart 라이브러리를 사용해 대리점별 매입 현황, 달성률 등 중요 정보를 다양한 차트로 표현하여 제공',
      'pdfmake 라이브러리를 사용해 대리점별 출고송장, 거래명세서, 여신율, 수금이자 내역서, 세금계산서 출력 및 다운로드 기능 제공',
      'Toast UI Editor 라이브러리를 사용해 공지,신제품,자료실 등의 게시판 CRUD 기능 구현'
    ]
  },
  {
    title: '▎국내 공장 직접직 인사 정보 조회 사이트 개발',
    devPeriod: '2022년 10월 1일 ~ 2022년 11월 30일',
    devList: [
      '그룹웨어를 사용하지 못하는 직접직 사원들을 위한 모바일 전용 인사 정보 조회 사이트 개발',
      'VUE3 프레임워크를 사용해 개발',
      'Vuetify를 사용해 반응형 UI 구현',
      'TypeScript 적용',
      'Vite 적용'
    ]
  },
  {
    title: '▎직접직 인사 정보 조회 사이트 수평 전개',
    devPeriod: '2023년 1월 2일 ~ 2023년 2월 23일',
    devList: [
      '해외 법인 요청으로 인한 모바일 전용 인사 정보 조회 사이트 수평 전개',
      '디자인팀과의 협업을 통해 피그마를 사용하여 개선된 UI/UX 적용',
      'vue-118n을 사용해 다국어 처리'
    ]
  },
  {
    title: '▎대리점 주문 관리자 사이트 NUXT3 마이그레이션',
    devPeriod: '2023년 6월 5일 ~ 2023년 11월 17일',
    devList: [
      'VUE2를 사용해 개발된 프로젝트를 NUXT3 프레임워크로 마이그레이션 진행',
      'ElementPlus를 사용해 반응형 UI 구현',
      'Nginx와 PM2를 사용해 프로젝트 배포',
      'SpringBoot와 PL/SQL 사용한 백엔드 개발 동시 진행',
      'JWT를 이용한 인증 시스템 구현'
    ]
  }
]);

const elementsStore = useElementsStore();
const career = ref<HTMLElement | null>(null);
onMounted(() => {
  elementsStore.carerrRef = career.value;
});
</script>

<template>
  <div class="career-container" ref="career">
    <div class="career-content-box">
      <div class="title-box">
        <span class="title"> CAREER </span>
      </div>

      <div class="career-content">
        <div class="career-introduction-box">
          <div class="company-logo-container">
            <div class="company-logo-wrapper">
              <NuxtImg class="logo-img" src="/img/career/AutonicsCI.png" />
            </div>
          </div>

          <div class="career-info-container">
            <div class="company-title">Autonics</div>
            <div class="working-day">2021년 01월 01일 ~ {{ currentDay }} (현재)</div>
            <div class="company-desc">
              오토닉스는 산업 자동화 분야의 핵심인 센서, 제어기기, 모션 디바이스, 레이저 마킹 시스템 등 약 6,000여 종의 제품을 생산, 판매하며 종합적인 솔루션을
              제공하고 있는 산업 자동화 전문 기업입니다.
              <br /><br />
              PL/SQL을 사용해 개발된 사내 백오피스 사이트 및 대리점 주문 사이트를 포함한 다양한 B2B 사이트 그리고 C#을 이용해 개발된 공장에서 사용되는 Gathering
              프로그램등을 VUE,NUXT 프레임워크를 사용해 마이그레이션하는 프로젝트에서 프론트엔드와 백엔드 개발을 담당하고 있으며, 개발 완료된 프로젝트에 대한
              유지보수와 리눅스 및 윈도우 서버의 관리 및 배포 작업 또한 맡고 있습니다.
            </div>

            <div class="career-history" v-for="history in careerHistory" :key="history.title">
              <div class="title">{{ history.title }}</div>
              <div class="develop-period">{{ history.devPeriod }}</div>
              <ul class="devlop-history-list" v-for="devHistory in history.devList">
                <li>{{ devHistory }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
