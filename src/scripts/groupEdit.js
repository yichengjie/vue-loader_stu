import Vue from 'vue' ;
import AppLayout from './views/groupEdit/AppLayout.vue' ;
var VueValidator = require('vue-validator') ;
Vue.use(VueValidator) ;

new Vue({
  el: 'body',
  components: {
    AppLayout
  },
  ready:function(){

  }
}) ;
