<template>
  <div class="page">
    <main-page/>
  </div>
</template>



<script>
import mainPage from './pages/mainPage.vue'
export default {
  name: 'App',
  components:{
    mainPage
  },
  data() {
    return {

    }
  },
  methods: {

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
