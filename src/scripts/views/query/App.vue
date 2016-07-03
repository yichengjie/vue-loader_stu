<template>
  <div class="app">
    <header-comp></header-comp>
    <query-main-comp v-bind:list="list"></query-main-comp>
  </div>
</template>

<script>
  import QueryMainComp from './QueryMainComp.vue' ;
  import HeaderComp from '../../components/HeaderComp.vue' ;

  export default {
    props: ['list'],
    components: {
      HeaderComp,
      QueryMainComp
    }
  }
</script>
