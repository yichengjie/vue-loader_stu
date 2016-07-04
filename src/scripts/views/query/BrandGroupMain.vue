<template>
  <div class="container-fluid main_content" id="main_content" >
     <div class="pull-right clearfix" style="margin-bottom: 8px">
        <button type="button" class="btn btn-sm btn-success" onclick="window.location.href='editBrandGroup.html'">新建品牌集</button>
        <button class="btn btn-info btn-sm">发布</button>
        <button class="btn btn-warning btn-sm">截止</button>
        <button class="btn btn-danger btn-sm">删除</button>
    </div>
    <span class="clearfix"></span>
    <brand-group-list></brand-group-list>
  </div>
</template>

<script type="text/javascript">
  import BrandGroupList from './BrandGroupList.vue' ;
  export default {
    components:{
      BrandGroupList
    }
  }
</script>
