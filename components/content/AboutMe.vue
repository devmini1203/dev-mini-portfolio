<script lang="ts" setup>
import { IconUser, IconCalendarSmile, IconMapPin, IconPhone, IconMail, IconPencil } from '@tabler/icons-vue';

const basicInfo = ref([
  {
    icon: IconUser,
    infoKey: 'name',
    infoLabel: '이름',
    infoValue: '백종민'
  },
  {
    icon: IconCalendarSmile,
    infoKey: 'dateOfBirth',
    infoLabel: '생년월일',
    infoValue: '96.12.03'
  },
  {
    icon: IconMapPin,
    infoKey: 'address',
    infoLabel: '주소',
    infoValue: '경상남도 김해시'
  },
  {
    icon: IconPhone,
    infoKey: 'phoneNumber',
    infoLabel: '연락처',
    infoValue: '010-2585-0185'
  },
  {
    icon: IconMail,
    infoKey: 'email',
    infoLabel: '이메일',
    infoValue: 'devmini1203@gmail.com'
  },
  {
    icon: IconPencil,
    infoKey: 'education',
    infoLabel: '학력',
    infoValue: '동의대학교 - 정보통신공학과'
  }
]);
</script>

<template>
  <div class="about-me-container">
    <div class="title-box">
      <span class="title"> ABOUT ME </span>
    </div>

    <div class="basic-info-box">
      <div class="my-info-box" v-for="info in basicInfo">
        <div class="icon-box">
          <component class="icon" :is="info.icon" />
        </div>

        <div class="text-box">
          <p>{{ info.infoLabel }}</p>
          <p>{{ info.infoValue }}</p>
        </div>
      </div>

      <div style="display: flex; color: white; justify-content: center; width: 100%; padding-top: 6rem; gap: 30px; max-width: 71.25rem">
        <div>
          <NuxtImg src="/img/profile_image.jpg" sizes="360" />
        </div>

        <div>
          <div>
            <p style="text-align: center; font-size: 1.2rem">느리지만 꾸준하게</p>
            <br />
            <p>반갑습니다. 3년차 프론트엔드 개발자 백종민 입니다.</p>
            <p>저는 현재 [오토닉스] 부산 본사의 전산실에서 보람차고 뿌듯한 하루하루를 보내고 있습니다.</p>
            <p>현 회사는 제가 입사할 때 각종 레거시한 프로젝트들을 걷어내고 최신 웹 기술을 적용하는 과도기 였고</p>
            <p>이를 위해, 채택한 프레임워크는 Vue.js 였으며 이것이 프론트엔드 개발자로서 접한 첫 프레임워크였습니다.</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
