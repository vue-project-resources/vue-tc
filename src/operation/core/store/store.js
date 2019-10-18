import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // state 中的数据只能通过this.$store.state 来访问
    count:0
  },
  mutations: {
    // 方法调用
    increment(state){
      state.count++;
    },
    // 最对支持二个形式参数
    subtract(state,k){
      state.count -= k;
    }

  },
  getters:{
    optCount:function (state) {
      return '当前最新的：'+state.count;
    }
  },
  actions: {

  }
})
