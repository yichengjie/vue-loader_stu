<template>
  <div class="app">
    <header-layout></header-layout>
    <brand-group-main></brand-group-main>
  </div>
</template>

<script>
  import BrandGroupMain from './BrandGroupMain.vue' ;
  import HeaderLayout from './HeaderLayout.vue' ;
  export default {
    components: {
      HeaderLayout,
      BrandGroupMain
    }
  }
</script>
