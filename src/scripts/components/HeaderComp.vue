<template>
    <div class="navbar-fixed-top" id = "myheader">
        <header-nav-comp></header-nav-comp>
        <header-query-comp></header-query-comp>
    </div>
</template>
<script>
  import HeaderNavComp from './HeaderNavComp.vue' ;
  import HeaderQueryComp from './HeaderQueryComp.vue' ;
  export default {
    components: {
      HeaderNavComp,
      HeaderQueryComp
    }
  }
</script>
