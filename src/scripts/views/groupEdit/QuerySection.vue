<template>
	<!--query section start-->
    <div class ="query_section">
        <div class="query_row">
            <span class="query_title">发布状态 | 生效状态</span>
            <span class="pull-right marginR15">
                <button type="button" class="btn btn-sm btn-success" @click ="saveFormData">保存</button>
            </span>
        </div>
    </div>
    <!--query section end-->
</template>
<script type="text/javascript">
  export default {
    methods:{
        saveFormData(){
            //this.$emit('child-submit') ;
            var params = {"name":"yicj","addr":"henan"} ;
            this.$dispatch('child-submit',params) ;
        }
    }
  }
</script>