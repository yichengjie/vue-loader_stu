<template>
  <div class="app">
    <header-comp></header-comp>
    <query-main-comp></query-main-comp>
  </div>
</template>

<script>
  import QueryMainComp from './QueryMainComp.vue' ;
  import HeaderComp from './HeaderComp.vue' ;

  export default {
    components: {
      HeaderComp,
      QueryMainComp
    }
  }
</script>
