<template>
  <div class="container-fluid main_content" id="main_content" >
     <div class="pull-right clearfix" style="margin-bottom: 8px">
        <button type="button" class="btn btn-sm btn-success" onclick="window.location.href='groupEdit.html'">新建品牌集</button>
        <button class="btn btn-info btn-sm">发布</button>
        <button class="btn btn-warning btn-sm">截止</button>
        <button class="btn btn-danger btn-sm">删除</button>
    </div>
    <span class="clearfix"></span>

    <div id="brand_group_list" v-for="l in list">
    <div class="panel panel-default brand_group" >
            <div class="panel-heading">
                <div class="panel-title">
                    <div class="panel-title">
                        <div class="brand_title">
                            <span class="left text-info">
                                <input name ="checkAll" type="checkbox">
                                <i class="glyphicon glyphicon-upload marginL10" data-name="showHideBody"></i>
                                asgui_ca test
                                <i class="glyphicon glyphicon-info-sign pull-right descrImg" data-toggle="tooltip"
                                   data-placement="top"  title="描述信息为空"></i>
                            </span>
                            <span class="right">
                                <i class="glyphicon glyphicon-pencil marginR10 myhand"></i>
                                <button type="button" class="btn btn-success btn-sm" onclick="window.location.href='editBrand.html'">新建品牌</button>
                            </span>
                            <span class="center">
                               <span>序列号：8776559</span>
                               <span class="marginL10">城市对：<span class="bold">1 → 2</span></span>
                               <span class="marginL10">生效日期对：<span class="bold">2016-06-30 — 9999-12-31</span></span>
                               <span class="marginL10">旅行日期对：<span class="bold">2016-06-30 — 9999-12-31</span></span>
                               <span class="marginL10">发布对象：状态：<span class="text-danger">未发布</span></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <ul></ul>
            </div>
        </div>
   </div>
  </div>
</template>

<script type="text/javascript">
  import { getBrandGroup } from '../../vuex/query/getters' ;
  export default {
    vuex: {
      getters: {
        list: getBrandGroup
      }
    }
  }
</script>
