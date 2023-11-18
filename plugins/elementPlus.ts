import ElementPlus from 'element-plus';
import ko from 'element-plus/es/locale/lang/ko';
import 'element-plus/theme-chalk/display.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus, {
    locale: ko
  });
});
