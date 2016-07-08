<template>
  <div class="app">
    <header-layout></header-layout>
    <main-content></main-content>
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
    events: {
      'child-submit': function (params) {
         this.$broadcast('parent-saveGroup',params) ;
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