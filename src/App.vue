<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isMainPageOpen: true,
      isPortfolioPageOpen: false,
      selectedInFilter: ''
    }
  },
}
</script>

<style>
@import url(reset.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
