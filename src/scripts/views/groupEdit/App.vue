<template>
  <div class="app">
    <header-layout v-on:child-submit="childSubmit"></header-layout>
    <main-content v-ref:profile></main-content>
  </div>
</template>
<script>
  'use strict' ;
  import HeaderLayout from './HeaderLayout.vue' ;
  import MainContent from './MainContent.vue' ;
  //将表单的填写状态全部修改为修改过
  export default {
    components: {
       HeaderLayout,
       MainContent
    },
    methods:{
      childSubmit(params){
         var mainContent = this.$refs.profile ;
         mainContent.saveFormData(params) ;
      }
    }
  }
</script>
<style>
  .errors{
    color:#a94442;
    margin-top: 7px;
  }
</style>