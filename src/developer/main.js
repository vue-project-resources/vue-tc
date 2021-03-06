import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './core/store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {beforeEach} from "./core/guard-service/guard-service";
import i18n from './core/i18n/i18n'
import eventBus from  "./menu/bus"
import loading from "./menu/loading";
// 注册拦截器
router.beforeEach(beforeEach);

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(eventBus);
Vue.use(loading);
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
