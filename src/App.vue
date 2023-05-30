<template>
  <div class="page">
    <transition name="showLockinScreen">
      <div class="locking_screen" v-if="isScreenLocked" @click="closeForm"></div>
    </transition>
    <header-page @openOrderForm="openOrderForm"/>
    <div class="content" ref="content">
      <about-company-page></about-company-page>
      <div style="border-bottom: solid 1px #130D0D;"></div>
    </div>
    <div class="form_for_order" ref="form_for_order">
        <order-form/>
    </div>
    <question-list></question-list>
    <footer-page></footer-page>
  </div>
</template>


<script>
import HeaderPage from './components/header.vue'
import AboutCompanyPage from './components/AboutCompany.vue'
import FooterPage from './components/footer.vue'
import orderForm from './components/orderForm.vue'
import QuestionList from './components/QuestionList.vue'

export default {
  name: 'App',
  components:{
    HeaderPage,
    AboutCompanyPage,
    FooterPage,
    orderForm,
    QuestionList
  },
  data() {
    return {
      isScreenLocked: false
    }
  },
  methods: {
    openOrderForm() {
      this.$refs.form_for_order.style.opacity = 1;
      this.isScreenLocked = true
      console.log(111)
    },
    closeForm() {
      this.$refs.form_for_order.style.opacity = 0;
      this.isScreenLocked = false
    }
  }
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
  opacity: 1;
  transition: opacity .2s linear;
  margin: 0px 150px;
  position: relative;
}

.form_for_order {
  z-index: -1;
  opacity: 0;
  transition: opacity .2s linear;
}

.locking_screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 500;
}

.showLockinScreen-enter-active,
.showLockinScreen-leave-active {
  transition: opacity .2s linear;
}

.showLockinScreen-enter-from,
.showLockinScreen-leave-to {
  opacity: 0;
}

</style>
