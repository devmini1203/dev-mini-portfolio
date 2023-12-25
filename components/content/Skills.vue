<script lang="ts" setup>
import { IconHelpCircle } from '@tabler/icons-vue';

const props = defineProps<{
  appWidth: number;
}>();

const mySkills = ref([
  { skillType: 'FrontEnd' },
  { skillName: 'HTML5', skillImg: '/img/skills/HTML5.png', percentage: 75 },
  { skillName: 'CSS3', skillImg: '/img/skills/CSS3.png', percentage: 55 },
  { skillName: 'JS', skillImg: '/img/skills/JS.png', percentage: 75 },
  { skillName: 'VUE', skillImg: '/img/skills/VUE.png', percentage: 75 },
  { skillName: 'TS', skillImg: '/img/skills/TS.png', percentage: 67 },
  { skillName: 'NUXT', skillImg: '/img/skills/NUXT.png', percentage: 68 },
  { skillName: 'ElementPlus', skillImg: '/img/skills/ElementPlus.png', percentage: 80 },
  { skillName: 'Bootstrap', skillImg: '/img/skills/Bootstrap.png', percentage: 65 },
  { skillName: 'Vuetify', skillImg: '/img/skills/Vuetify.png', percentage: 80 },
  { skillName: 'Sass', skillImg: '/img/skills/Sass.png', percentage: 65 },
  { skillName: 'Vite', skillImg: '/img/skills/Vite.png', percentage: 70 },
  { skillName: 'Webpack', skillImg: '/img/skills/Webpack.png', percentage: 65 },
  { skillType: 'BackEnd' },
  { skillName: 'SpringBoot', skillImg: '/img/skills/SpringBoot.png', percentage: 60 },
  { skillName: 'OracleDB', skillImg: '/img/skills/OracleDB.png', percentage: 55 },
  { skillName: 'PL/SQL', skillImg: '/img/skills/PLSQL.png', percentage: 55 },
  { skillType: 'Server' },
  { skillName: 'Nginx', skillImg: '/img/skills/Nginx.png', percentage: 70 },
  { skillName: 'PM2', skillImg: '/img/skills/PM2.png', percentage: 60 },
  { skillName: 'Tomcat', skillImg: '/img/skills/Tomcat.png', percentage: 65 },
  { skillType: 'Version Controll' },
  { skillName: 'SVN', skillImg: '/img/skills/SVN.png', percentage: 70 },
  { skillName: 'Git', skillImg: '/img/skills/Git.png', percentage: 65 },
  { skillName: 'GitHub', skillImg: '/img/skills/GitHub.png', percentage: 65 }
]);

const levlInfoText = ref([
  '입문: 한번 경험해본 기술 스택',
  '초급: 코드를 보고 디버깅이 가능',
  '중급: 코드를 이해하며 어느 정도 학습됨',
  '고급: 코드를 응용해서 구현하는 데 있어 익숙함'
]);

const dynamicSkillsClass = computed(() => {
  /*  if (props.appWidth >= 730) {
    return 'skills-container';
  } else {
    return 'skills-container-minimize';
  } */

  return 'skills-container';
});

const elementsStore = useElementsStore();
const skills = ref<HTMLElement | null>(null);
onMounted(() => {
  elementsStore.skillsRef = skills.value;
});
</script>

<template>
  <div :class="dynamicSkillsClass" ref="skills">
    <div class="skills-content-box">
      <div class="title-box">
        <span class="title"> SKILLS </span>
      </div>

      <div class="skills-content">
        <div class="skill-level-desc-box">
          <div class="skill-level">
            <div class="level-info-box">
              <el-popover trigger="click" placement="top" width="330px">
                <template #reference>
                  <component :is="IconHelpCircle" class="question-mark-icon" />
                </template>

                <div class="info-text-box">
                  <div v-for="info in levlInfoText">{{ info }}</div>
                </div>
              </el-popover>
            </div>

            <div class="color-bar" />

            <div class="text-box">
              <div class="top-text">· 입문 · 초급 · 중급 · 고급 ·</div>
              <div>0 - 25 - 50 - 75 - 100</div>
            </div>
          </div>
        </div>

        <div class="skills" v-for="skills in mySkills" :key="skills.skillName">
          <div class="skill-type" v-if="skills.skillType">
            {{ skills.skillType }}
          </div>

          <div class="skill-desc" v-if="skills.skillName">
            <NuxtImg class="img" :src="skills.skillImg" sizes="30" />
            <span class="text"> {{ skills.skillName }} </span>
          </div>

          <div class="skill-percentage-box" v-if="skills.skillName">
            <div class="skill-percentage" :style="`width:${skills.percentage}%`">{{ skills.percentage }} %</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
