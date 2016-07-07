<template>
  <div class="app">
    <header-layout></header-layout>
    
    <div class="container">
        <div class="col-sm-8">
            <validator name="validation">
            <form class="form-horizontal" novalidate>
              <div class="form-group" 
                :class="{ 'has-error': $validation.name.minlength &&$validation.name.dirty}">
                <label  class="col-sm-2 control-label">Name</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-validate:name="{ minlength: 2, maxlength: 10 }" v-model ="name" placeholder="name">
                </div>
                <div class="col-sm-4 errors" v-if ="$validation.name.dirty">
                     <span v-show="$validation.name.minlength">name is too short.</span>
                    <span v-show="$validation.name.maxlength">name is too long.</span>
                </div>
              </div>
              <div class="form-group" :class ="{'has-error':$validation.address.required&&$validation.address.dirty}">
                <label  class="col-sm-2 control-label">Address</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control"  placeholder="address" v-validate:address="{required:true}" v-model ="address">
                </div>
                <div class="col-sm-4 errors" v-if ="$validation.address.dirty">
                     <span v-show="$validation.address.required">address is required.</span>
                </div>
              </div>
            </form>
            </validator>
        </div>
        <div class="cols-sm-4">
            <pre>
                {{$validation | json}}
            </pre>
        </div>
    </div>

  </div>
</template>

<script>
  'use strict' ;
  import HeaderLayout from './HeaderLayout.vue' ;
  import _ from 'underscore' ;
  //将表单的填写状态全部修改为修改过
  function changeInputStatus(data,validator){
    console.info('changeInputStatus() is called') ;
    let keys1 =  Object.keys(data) ;
    let keys2 = _.keys(validator) ;
    for(let key1 of keys1){
       if(_.contains(keys2,key1)){
          validator[key1].dirty = true ;
       }
    }
  }
  export default {
    components: {
       HeaderLayout
    },
    data:function(){
      return {
        name:'',
        address:''
      } ;
    },
    ready (){
        var vm = this ;
        this.$on('child-submit', function (params) {
           console.info('提交表单按钮被点击') ;
           let validator = this.$validation ;
           changeInputStatus(vm.$data,validator) ;
           let vueFlag = validator.valid ;
           console.info('vueFlag : ' + vueFlag) ;
           console.info('formData : ' + JSON.stringify(vm.$data)) ;

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