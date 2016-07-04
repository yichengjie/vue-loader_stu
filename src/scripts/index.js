import Vue from 'vue' ;
import App from './views/query/App.vue' ;
import store from './vuex/query/store' ;// import 我们刚刚创建的 store

new Vue({
  el: 'body',
  components: {
    app: App
  },
  store: store ,// 在根组件加入 store，让它的子组件和 store 连接
  ready:function(){
  	
  }
}) ;
