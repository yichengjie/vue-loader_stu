<template>
	<!--query section start-->
    <div class ="query_section">
            <div class="query_row">
                <span class="query_title">发布状态 | 生效状态</span>
                <input id ="c1" type="checkbox"> <label for="c1" class="query_item">未发布</label>
                <input id ="c2" type="checkbox" class="query_item"><label for="c2">已发布</label>
                <span class="marginLR5">|</span>
                <input  id ="c3" type="checkbox"><label for="c3"> 未生效</label>
                <input  id ="c4" type="checkbox"> <label for="c4">已生效</label>
                <input  id ="c5" type="checkbox"> <label for="c5">已过期</label>
                <span class="marginL10 marginR5">品牌集名称</span>
                <input type="text" class="common_input" style="width: 120px"/>
                <span class="marginL10 marginR5">品牌集名称</span>
                <input type="text" class="common_input" style="width: 120px"/>
                <span class="pull-right marginR15">
                    <button type="button" class="btn btn-sm btn-primary" @click ="queryBrandGroup('hello world')">查询</button>
                </span>
            </div>
            <div class="query_row">
                <span class="marginL10 marginR5">城市对</span>
                <input type="text" class="common_input" style="width: 60px"/>
                <span style="margin: 0 2px;">-</span>
                <input type="text" class="common_input" style="width: 60px"/>
                <span class="marginL10 marginR5">发布对象</span>
                <input type="text" class="common_input" style="width: 120px" placeholder="office号/IATA号" />
                <span class="marginL10 marginR5">销售日期</span>
                <input type="text" class="common_input" style="width: 100px" placeholder="范围" />
                <span style="margin: 0 2px;">-</span>
                <input type="text" class="common_input" style="width: 100px" placeholder="范围" />
            </div>
    </div>
    <!--query section end-->
</template>
<script type="text/javascript">
  import { queryBrandGroup } from '../vuex/actions';
  export default {
    vuex: {
      actions: {
        queryBrandGroup: queryBrandGroup
      }
    }
  }
</script>