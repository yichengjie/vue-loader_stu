<template>
  <div class="app">
    <div class="navbar-fixed-top" id = "myheader">
        <header-nav-comp></header-nav-comp>
        <query-section></query-section>
    </div>
    <main-content></main-content>
  </div>
</template>

<script>
  import MainContent from './MainContent.vue' ;
  import HeaderNavComp from '../../components/HeaderNavComp.vue' ;
  import QuerySection from './QuerySection.vue' ;
  export default {
    components: {
      HeaderNavComp,
      QuerySection,
      MainContent
    }
  }
</script>
