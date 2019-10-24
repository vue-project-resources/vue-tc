import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './core/store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {beforeEach} from "./core/guard-service/guard-service";
import xcTable from './../common/components/table/table'
import i18n from './core/i18n/i18n'

Vue.config.productionTip = false;

Vue.use(ElementUI);
// 注册拦截器
router.beforeEach(beforeEach);
Vue.component('xc-table', xcTable);
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
