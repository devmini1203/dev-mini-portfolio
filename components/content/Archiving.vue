<script lang="ts" setup>
import type { NuxtLink } from '#build/components';
</script>

<template>
  <div class="archiving-container">
    <div class="archiving-content-box">
      <div class="title-box">
        <span class="title"> ARCHIVING </span>
      </div>

      <div class="archiving-content">
        <div class="content-square">
          <div class="logo-box">
            <NuxtImg src="/img/archiving/github-mark.png" class="logo" />
            <h2 class="archiving-title">Github</h2>
          </div>
          <div class="path">
            <NuxtLink to="https://github.com/devmini1203"> github.com/devmini1203 </NuxtLink>
          </div>
          <div>
            <span class="desc">소스 코드 저장소</span>
            입니다.
          </div>

          <div>
            <ul>
              <li>과거 프로젝트, 프로그램, 앱의 소스 코드</li>
              <li>안녕</li>
              <li>안녕</li>
            </ul>
          </div>
        </div>

        <div class="content-square">
          <div class="logo-box">
            <NuxtImg src="/img/archiving/velog-mark.png" class="logo" />
            <h2 class="archiving-title">Velog</h2>
          </div>
          <div class="path">
            <NuxtLink to="https://velog.io/@devmini1203"> velog.io/@devmini1203 </NuxtLink>
          </div>
          <div>
            <span class="desc"> 공부 및 지식 공유 목적의 블로그 </span>
            입니다.
          </div>

          <div>
            <ul>
              <li>공부한 것을 진정한 나의 것으로 만들기 위한 기록</li>
              <li>안녕</li>
              <li>안녕</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
