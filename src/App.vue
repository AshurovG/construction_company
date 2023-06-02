<template>
  <div class="page">
    <main-page/>
  </div>
</template>

<script>
import mainPage from './pages/mainPage.vue'
// import HeaderPage from '../components/header.vue'
// import portfolioPage from './pages/portfolioPage.vue'

export default {
  name: 'App',
  components:{
    mainPage,
    // portfolioPage,
    // HeaderPage
  },
  data() {
    return {
      // isMainPageOpen: true,
      // isPortfolioPageOpen: false,

    }
  },
  methods: {
    // openMainPage(){
    //   this.isMainPageOpen=true
    //   this.isPortfolioPageOpen=false
    // },
    // openPortfolioPage(){
    //   this.isMainPageOpen=false
    //   this.isPortfolioPageOpen=true
    // }
  }

}
</script>

<style>
@import url(reset.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}


</style>
