<template>
<div class="container-fluid main_content" id="main_content" >
	<validator name="validation">
    <form class="form-horizontal" novalidate="">
        <div class="data_section ">
            <div class="title_layout">
                <span class="left">品牌集</span>
            </div>
            <!--必填项 strart-->
            <div class="content_layout">
                <span class="left text-danger">必填项</span>
                <div class="right">
                    <div class="form-group" v-bind:class ="{'has-error':$validation.sequenceNumber.required &&$validation.sequenceNumber.dirty}">
                        <label class="pure-u-1-8 control-label">序列号</label>
                        <div class="pure-u-1-4">
                            <input type="text" v-model ="sequenceNumber"  class="form-control"  v-validate:sequence-number="{required:true}"
                            placeholder="数字">
                        </div>
                        <span class="errors" v-if ="$validation.sequenceNumber.dirty">
                        	<span v-show ="$validation.sequenceNumber.required">必填</span>
                        </span>
                    </div>

                    <div class="form-group">
                        <label class="pure-u-1-8 control-label">品牌集名称</label>
                        <div class="pure-u-1-4">
                            <input type="text" v-bind:disabled="!editAble" v-model ="brandName"  class="form-control"  placeholder="数字">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="pure-u-1-8 control-label">销售日期</label>
                        <div class="pure-u-1-8">
                            <input type="text" v-model ="firstDate"  class="form-control"  placeholder="范围">
                        </div>
                        <label for="id2" class="glyphicon glyphicon-calendar iconfont_box"></label>
                        <div class="pure-u-1-8">
                            <input type="text" v-model ="lastDate"  class="form-control"  placeholder="范围">

                        </div>
                        <label for="id2" class="glyphicon glyphicon-calendar iconfont_box"></label>
                    </div>

                    <div class="form-group">
                        <label class="pure-u-1-8 control-label">区域1</label>
                        <div class="pure-u-1-8">
                            <select name="locType1" v-model ="locType1" class="form-control">
                                <option value="">选择</option>
                                <option value="A">A-大区</option>
                                <option value="C">C-城市</option>
                                <option value="N">N-国家</option>
                                <option value="P">P-机场</option>
                                <option value="S">S-州</option>
                                <option value="Z">Z-区域</option>
                            </select>
                        </div>
                        <div class="pure-u-1-8">
                            <input type="text" v-model ="loc1"  class="form-control"  placeholder="范围">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="pure-u-1-8 control-label">区域2</label>
                        <div class="pure-u-1-8">
                            <select name="locType2" v-model ="locType2" class="form-control">
                                <option value="">选择</option>
                                <option value="A">A-大区</option>
                                <option value="C">C-城市</option>
                                <option value="N">N-国家</option>
                                <option value="P">P-机场</option>
                                <option value="S">S-州</option>
                                <option value="Z">Z-区域</option>
                            </select>
                        </div>
                        <div class="pure-u-1-8">
                            <input type="text" v-model ="loc2" class="form-control"  placeholder="范围">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="pure-u-1-8 control-label">区域限制</label>
                        <div class="pure-u-1-2">
                            <div class="radio-inline">
                                <input type="radio" id="r1"  v-model ="geo" value="1" /><label for="r1" class="myhand">区域1→区域2</label>
                            </div>
                            <div class="radio-inline">
                                <input type="radio" id="r2" v-model ="geo" value ="2"/><label for="r2" class="myhand">区域2→区域1</label>
                            </div>
                            <div class="radio-inline">
                                <input type="radio" id="r3" v-model ="geo" value ="3"/><label for="r3" class="myhand">双向</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--必填项 end-->

            <!--必填项 strart-->
            <div class="content_layout">
                <span class="left">选填项</span>
                <div class="right">
                    <div class="form-group">
                        <label class="pure-u-1-8 control-label">旅行日期</label>
                        <div class="pure-u-1-8">
                            <input type="text" v-model ="travelStartDate" class="form-control"  placeholder="范围">
                        </div>
                        <div class="pure-u-1-8">
                            <input type="text" v-model ="travelEndDate" class="form-control"  placeholder="范围">
                        </div>
                    </div>

                    <div class="form-group">
                        <label  class="pure-u-1-8 control-label">发布</label>
                        <div class="pure-u-1-2">
                            <div class="table_layout"  style="width:310px;">
                                <table>
                                    <thead>
                                    <tr>
                                        <th width="180">发布类型</th>
                                        <th  width="130">发布对象</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for ="l in pubList">
                                    	<td >
	                                        <select v-model ="l.pubType" class="common_input"  style="width: 98%">
	                                            <option value="">选择</option>
	                                            <option value="T">Travel Agency code</option>
	                                            <option value="I">IATA number</option>
	                                            <option value="V">Department Code</option>
	                                        </select>
	                                        
	                                    </td>
	                                    <td>
	                                    	<input type="text" class="common_input" 
	                                    		style="width: 95%"/>
	                                    </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="table_footer">
                                    <button type="button" class="btn btn-success btn-sm" @click ="addLine">增加一行</button>
                                    <button type="button" class="btn btn-default btn-sm" @click ="deleteLine">删除一行</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="pure-u-1-8 control-label">描述</label>
                        <div class="pure-u-1-3">
                            <textarea class="form-control" v-model ="descr" rows="3"></textarea>
                        </div>
                    </div>

                </div>
            </div>
            <!--必填项 end-->
        </div>
    </form>
    </validator>
    <pre>
        {{$validation | json}}
    </pre>
</div>
</template>
<script>
  'use strict' ;
  import _ from 'underscore' ;
  //将表单的填写状态全部修改为修改过
  function changeInputStatus(data,validator){
    console.info('changeInputStatus() is called') ;
    let keys1 =  _.keys(data) ;
    let keys2 = _.keys(validator) ;
    for(let key1 of keys1){
       if(_.contains(keys2,key1)){
          validator[key1].dirty = true ;
       }
    }
  }
  export default {
    data:function(){
      return {
         sequenceNumber:'',
         brandName:'',
         firstDate:'',
         lastDate:'',
         locType1:'',
         loc1:'',
         locType2:'',
         loc2:'',
         geo:'1',
         travelStartDate:'',
         travelEndDate:'',
         pubList:[],
         descr:'',
         status:'2'
      } ;
    },
    computed: {
        // 一个计算属性的 getter
        editAble: function () {
          return this.status != '3'
        }
    },
    events:{
        //'parent-saveGroup':'saveFormData'
    },
    ready:function(){
        var _self = this ;
        setTimeout(function(){
            _self.status = '3' ;
        },2000) ;
    },
    methods:{
    	addLine(){
    		this.pubList.push({"pubType":"I","pubCode":""}) ;
    	},
    	deleteLine(){
    		this.pubList.pop() ;
    	},
        saveFormData(params){//保存数据
           let validator = this.$validation ;
           changeInputStatus(this.$data,validator) ;
           let vueFlag = validator.valid ;
           console.info('vueFlag : ' + vueFlag) ;
           console.info('formData : ' + JSON.stringify(this.$data)) ;
           console.info('query params : ' + JSON.stringify(params)) ;
           console.info('保存数据到后台!') ;
        }
    }
  }
</script>
<style>
  .errors{
  	display:inline-block;
  	margin-left:10px;
    color:#a94442;
    margin-top: 7px;
  }
</style>