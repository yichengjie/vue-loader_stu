<template>
    <div class="navbar-fixed-top" id = "myheader">
        <header-nav-comp></header-nav-comp>
        <!--
        <query-section v-on:child-submit="submitForm"></query-section>
        -->
        <query-section></query-section>
    </div>
</template>
<script>
  import HeaderNavComp from '../../components/HeaderNavComp.vue' ;
  import QuerySection from './QuerySection.vue' ;
  export default {
    components: {
      HeaderNavComp,
      QuerySection
    },
    methods:{
      
    }
  }
</script>
