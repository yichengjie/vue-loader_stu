import Vue from 'vue' ;
import App from './views/query/App.vue' ;
new Vue({
  el: 'body',
  data:{
  	list:[1,2,3,4,5,6,7,8,9]
  },
  components: {
    app: App
  }
}) ;
