<template>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
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
html {
  background-color: #f5f5f5;

}


</style>
