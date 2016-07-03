<template>
  <div class="app">
    <component-a></component-a>
    <component-b></component-b>
    <header-comp></header-comp>
  </div>
</template>

<script>
  import ComponentA from './ComponentA.vue' ;
  import ComponentB from './ComponentB.vue' ;
  import HeaderComp from './HeaderComp.vue' ;

  export default {
    components: {
      ComponentA,
      ComponentB,
      HeaderComp
    }
  }
</script>
