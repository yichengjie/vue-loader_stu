<template>
  <div class="app">
    <header-layout></header-layout>
    <group-edit-main></group-edit-main>
  </div>
</template>

<script>
  import HeaderLayout from './HeaderLayout.vue' ;
  import GroupEditMain from './GroupEditMain.vue' ;
  export default {
    components: {
      HeaderLayout,
      GroupEditMain
    }
  }
</script>