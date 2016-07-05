<template>
  <div class="app">
    <header-layout></header-layout>

    
    <div class="container">
        <div class="col-sm-8">
            <validator name="validation">
            <form class="form-horizontal" novalidate>
              <div class="form-group" 
                :class="{ 'has-error': $validation.email.minlength &&$validation.email.dirty}">
                <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-validate:email="{ minlength: 2, maxlength: 10 }"
                  id="inputEmail3"  placeholder="Email">
                </div>
                <div class="col-sm-4 errors" v-if ="$validation.email.dirty">
                     <span v-show="$validation.email.minlength">Your comment is too short.</span>
                    <span v-show="$validation.email.maxlength">Your comment is too long.</span>
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-6">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
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
  import HeaderLayout from './HeaderLayout.vue' ;
  export default {
    components: {
       HeaderLayout
    },
    methods:{
      /*submitForm(e){//点击提交按钮
        console.info(e) ;
        console.info('提交表单按钮被点击') ;
        var validator = this.$validation ;
        validator.email.dirty = true ;

      }*/
    },
    ready (){
        this.$on('child-submit', function (params) {
           console.info(params) ;
           console.info('提交表单按钮被点击') ;
           var validator = this.$validation ;
           validator.email.dirty = true ;
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