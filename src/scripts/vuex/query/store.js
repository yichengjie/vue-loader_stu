import Vue from 'vue' ;
import Vuex from 'vuex' ;

// 告诉 vue “使用” vuex
Vue.use(Vuex) ;

const state = {
  // 应用启动时，count 置为0
  list: []
};

const mutations = {
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state
  INITLIST (state, list) {
      state.list.splice(0,state.list.length);
	  state.list = list ;
  }
};

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
});