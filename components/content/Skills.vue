<script lang="ts" setup>
const mySkills = ref([
  { skillType: 'FrontEnd' },
  { skillName: 'HTML5', skillImg: '/img/skills/HTML5.png', percentage: 75 },
  { skillName: 'CSS3', skillImg: '/img/skills/CSS3.png', percentage: 65 },
  { skillName: 'JS', skillImg: '/img/skills/JS.png', percentage: 70 },
  { skillName: 'VUE', skillImg: '/img/skills/VUE.png', percentage: 70 },
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
  { skillType: 'Configuration Management' },
  { skillName: 'SVN', skillImg: '/img/skills/SVN.png', percentage: 70 },
  { skillName: 'Git', skillImg: '/img/skills/Git.png', percentage: 60 },
  { skillName: 'GitHub', skillImg: '/img/skills/GitHub.png', percentage: 60 }
]);
</script>

<template>
  <div class="skills-container">
    <div class="title-box">
      <span class="title"> SKILLS </span>
    </div>

    <div class="my-skills-box">
      <div class="skills" v-for="skills in mySkills" :key="skills.skillName">
        <div class="skill-type" v-if="skills.skillType">
          {{ skills.skillType }}
        </div>

        <div class="skill-desc" v-if="skills.skillName">
          <NuxtImg class="img" :src="skills.skillImg" sizes="20" />
          <span class="text"> {{ skills.skillName }} </span>
        </div>

        <div class="skill-percentage-box" v-if="skills.skillName">
          <div class="skill-percentage" :style="`width:${skills.percentage}%`">{{ skills.percentage }} %</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
