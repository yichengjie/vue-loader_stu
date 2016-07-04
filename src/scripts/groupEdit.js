import Vue from 'vue' ;
import App from './views/groupEdit/App.vue' ;
var VueValidator = require('vue-validator') ;
Vue.use(VueValidator) ;

new Vue({
  el: 'body',
  components: {
    app: App
  }
}) ;
