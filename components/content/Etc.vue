<script lang="ts" setup>
const myCertificate = ref([
  {
    name: '정보처리기사',
    acquisitionDate: '2020년 08월 28일',
    img: '/img/etc/q-net.png'
  },
  {
    name: '리눅스 마스터 2급',
    acquisitionDate: '2019년 09월 21일',
    img: '/img/etc/kait.png'
  },
  {
    name: '인터넷정보관리사 2급',
    acquisitionDate: '2019년 12월 14일',
    img: '/img/etc/kait.png'
  },
  {
    name: '네트워크 관리사 2급',
    acquisitionDate: '2019년 10월 08일',
    img: '/img/etc/icqa.png'
  },
  {
    name: 'PC정비사 2급',
    acquisitionDate: '2020년 05월 19일',
    img: '/img/etc/icqa.png'
  },
  {
    name: 'E-Test(e-Professionals)',
    acquisitionDate: '2020년 02월 01일',
    img: '/img/etc/e-test.png'
  }
]);

const elementsStore = useElementsStore();
const etc = ref<HTMLElement | null>(null);
onMounted(() => {
  elementsStore.etcRef = etc.value;
});
</script>

<template>
  <div class="etc-container" ref="etc">
    <div class="etc-content-box">
      <div class="title-box">
        <span class="title"> ETC </span>
      </div>

      <div class="etc-content-cotainer">
        <!-- 보유 자격증 -->
        <div class="my-certificate-content-cotainer">
          <div class="title">보유 자격증</div>

          <el-row>
            <el-col
              :xl="8"
              :lg="8"
              :md="8"
              :sm="12"
              :xs="24"
              v-for="certificate in myCertificate"
              :key="certificate.name"
              style="display: flex; justify-content: center"
            >
              <div class="certificate-paper-container">
                <div class="outer-boder-container">
                  <div class="logo-wrapper">
                    <NuxtImg :src="certificate.img" v-if="certificate.name === 'E-Test(e-Professionals)'" class="logo-img-etest" />
                    <NuxtImg :src="certificate.img" v-else class="logo-img" />
                  </div>

                  <div class="certificate-desc-container-etest" v-if="certificate.name === 'E-Test(e-Professionals)'">
                    <div class="certificate-name">{{ certificate.name }}</div>
                    <div class="certicate-acquisition-date">취득일 : {{ certificate.acquisitionDate }}</div>
                  </div>

                  <div class="certificate-desc-container" v-else>
                    <div class="certificate-name">{{ certificate.name }}</div>
                    <div class="certicate-acquisition-date">취득일 : {{ certificate.acquisitionDate }}</div>
                  </div>
                </div>

                <div class="parent-medal">
                  <div class="child-medal"></div>
                </div>
                <div class="ribbon1"></div>
                <div class="ribbon2"></div>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 어학 성적 -->
        <div class="my-language-skills-content-conatiner">
          <div class="title">어학 성적</div>
          <div class="title">없음</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
