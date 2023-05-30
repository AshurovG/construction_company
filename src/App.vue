<template>
  <div class="page">
    <header-page></header-page>
    <div class="content">
      <about-company-page></about-company-page>
      <div style="border-bottom: solid 1px #130D0D;"></div>
    </div>
    <footer-page></footer-page>
  </div>
</template>


<script>
//import Header from 'components/header.vue'
import HeaderPage from './components/header.vue'
import AboutCompanyPage from './components/AboutCompany.vue'
import FooterPage from './components/footer.vue'
export default {
  name: 'App',
  components:{
    HeaderPage,
    AboutCompanyPage,
    FooterPage
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
.page {
  position: relative;

  width: 100%;
  height: 100vh;
  background-color: #F5F5F5;
}

.content {
  margin: 0px 150px;
}
</style>
