<template>
  <div class="app">
    <div class="navbar-fixed-top">
        <header-nav-comp></header-nav-comp>
        <query-section v-on:child-submit="childSubmit"></query-section>
    </div>
    <main-content v-ref:main-content></main-content>
  </div>
</template>
<script>
  'use strict' ;
  import HeaderNavComp from '../../components/HeaderNavComp.vue' ;
  import QuerySection from './QuerySection.vue' ;
  import MainContent from './MainContent.vue' ;
  //将表单的填写状态全部修改为修改过
  export default {
    components: {
       HeaderNavComp,
       QuerySection,
       MainContent
    },
    methods:{
      childSubmit(params){
         var mainContent = this.$refs.mainContent ;
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