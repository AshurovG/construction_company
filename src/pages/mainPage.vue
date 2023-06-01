<template>
  <div class="main-page">
    <transition name="showLockinScreen">
      <div class="locking_screen" v-if="isScreenLocked" @click="closeOrderForm"></div>
    </transition>
    <header-page @openOrderForm="openOrderForm"/>
    <div class="content" ref="content">
      <about-company-page></about-company-page>
      <div style="border-bottom: solid 1px #130D0D;"></div>
      <exterior-design-list/>
      <div style="border-bottom: solid 1px #130D0D;"></div>
      <ventilated-facades-list  :flag="flag"/>
      <div style="border-bottom: solid 1px #130D0D;"></div>
      <question-list></question-list>
    </div>
    <div class="form_for_order" v-if="isFormOpened">
        <order-form/>
    </div>
    <footer-page></footer-page>
  </div>
</template>


<script>
import HeaderPage from '../components/header.vue'
import AboutCompanyPage from '../components/AboutCompany.vue'
import FooterPage from '../components/footer.vue'
import orderForm from '../components/orderForm.vue'
import QuestionList from '../components/QuestionList.vue'
import exteriorDesignList from '../components/exteriorDesignList.vue';
import ventilatedFacadesList from '../components/ventilatedFacadesList.vue';

export default {
  name: 'App',
  components:{
    HeaderPage,
    AboutCompanyPage,
    FooterPage,
    orderForm,
    QuestionList,
    exteriorDesignList,
    ventilatedFacadesList
  },
  data() {
    return {
      isScreenLocked: false,
      isFormOpened: false,
      flag: true
    }
  },
  methods: {
    openOrderForm() {
      this.isFormOpened = true
      this.isScreenLocked = true
    },
    closeOrderForm() {
      this.isFormOpened = false
      this.isScreenLocked = false
    }
  },



}
</script>

<style>
@import url(../reset.css);

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
.page-main {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #F5F5F5;
  overflow: auto;
}

.content {
  opacity: 1;
  transition: opacity .2s linear;
  margin: 0px 150px;
  position: relative;
}

.locking_screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(61, 30, 30, 0.52);
  backdrop-filter: blur(2px);
  z-index: 500;
}

.showLockinScreen-enter-active,
.showLockinScreen-leave-active {
  transition: opacity .3s linear;
}

.showLockinScreen-enter-from,
.showLockinScreen-leave-to {
  opacity: 0;
}

.showOrderForm-enter-active,
.showOrderForm-leave-active {
  transition: opacity .2s linear;
}

.showOrderForm-enter-from,
.showOrderForm-leave-to {
  opacity: 0;
}
</style>
