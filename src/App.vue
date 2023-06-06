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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap');

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
