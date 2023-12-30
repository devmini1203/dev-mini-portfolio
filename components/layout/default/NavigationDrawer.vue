<script lang="ts" setup>
import { useLayoutStore } from '@/stores/layout';
import { IconBrandGithub, IconMail, IconSquareLetterV } from '@tabler/icons-vue';

const props = defineProps<{
  appWidth: number;
}>();

const layoutStore = useLayoutStore();
const { isNaviDrawer } = storeToRefs(layoutStore);

const content = ref([
  { menuName: 'Banner 🖼️', id: 0 },
  { menuName: 'About me 📣', id: 1 },
  { menuName: 'Skills 🛠️', id: 2 },
  { menuName: 'Projects 🧑‍💻', id: 3 },
  { menuName: 'Career 💼', id: 4 }
]);
const elementsStore = useElementsStore();
const moveToContent = (id: number) => {
  if (id === 0) {
    elementsStore.bannerRef?.scrollIntoView({ behavior: 'smooth' });
  }
  if (id === 1) {
    elementsStore.aboutMeRef?.scrollIntoView({ behavior: 'smooth' });
  }
  if (id === 2) {
    elementsStore.skillsRef?.scrollIntoView({ behavior: 'smooth' });
  }
  if (id === 3) {
    elementsStore.projectsRef?.scrollIntoView({ behavior: 'smooth' });
  }
  if (id === 4) {
    elementsStore.carerrRef?.scrollIntoView({ behavior: 'smooth' });
  }
};

watch(
  () => props.appWidth,
  () => {
    if (props.appWidth >= 730) {
      isNaviDrawer.value = false;
    }
  }
);

const bottomContent = ref([
  { icon: IconBrandGithub, label: 'Github', path: 'https://github.com/devmini1203' },
  { icon: IconMail, label: 'Mail', path: 'mailto:devmini1203@gmail.com' },
  { icon: IconSquareLetterV, label: 'Velog', path: 'https://velog.io/@devmini1203' }
]);
const navigateToAnotherSite = (path: string) => {
  navigateTo(path, {
    open: {
      target: '_blank'
    }
  });
};
</script>

<template>
  <el-drawer
    class="default-navigation-drawer"
    :model-value="isNaviDrawer"
    @update:model-value="($event) => (isNaviDrawer = $event)"
    :with-header="true"
    direction="rtl"
    :modal="true"
    size="250"
  >
    <template #header>
      <div class="title">Jong Min</div>
    </template>

    <template #default>
      <div class="navigation-drawer-menu-wrapper" v-for="menu in content" :key="menu.id">
        <div class="menu-box" @click="moveToContent(menu.id)">
          {{ menu.menuName }}
        </div>
      </div>

      <div class="navigation-drawer-bottom-content-wrapper">
        <div class="content" v-for="content in bottomContent" :key="content.label" @click="navigateToAnotherSite(content.path)">
          <div class="icon-wrapper">
            <component class="icon" :is="content.icon" />
          </div>
          {{ content.label }}
        </div>
      </div>
    </template>
  </el-drawer>
</template>

<style scoped></style>
