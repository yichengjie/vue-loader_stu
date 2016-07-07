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
    ready (){
        var vm = this ;
        this.$on('child-submit', function (params) {
           console.info('提交表单按钮被点击') ;
           /*let validator = this.$validation ;
           changeInputStatus(vm.$data,validator) ;
           let vueFlag = validator.valid ;
           console.info('vueFlag : ' + vueFlag) ;
           console.info('formData : ' + JSON.stringify(vm.$data)) ;*/

        })
    }
  }
</script>
<style>
  .errors{
    color:#a94442;
    margin-top: 7px;
  }
</style>