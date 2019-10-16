import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './core/store/store'
import {beforeEach} from "./core/guard-service/guard-service";

Vue.config.productionTip = false
// 注册拦截器
router.beforeEach(beforeEach);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
