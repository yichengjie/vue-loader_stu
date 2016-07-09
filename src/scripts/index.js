import Vue from 'vue' ;
import AppLayout from './views/query/AppLayout.vue' ;
import store from './vuex/query/store' ;// import 我们刚刚创建的 store

new Vue({
  el: 'body',
  components: {
    AppLayout
  },
  store: store // 在根组件加入 store，让它的子组件和 store 连接
}) ;
