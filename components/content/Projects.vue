<script lang="ts" setup>
const elementsStore = useElementsStore();
const projects = ref<HTMLElement | null>(null);

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
    </div>
  </div>
</template>

<style scoped></style>
