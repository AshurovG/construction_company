<template>
  <div class="portfolio_page">
    <transition name="showLockinScreen">
      <div class="locking_screen" v-if="isScreenLocked" @click="closeOrderForm"></div>
    </transition>
    <header-page @openOrderForm="openOrderForm" @openMain="openMain" />
    <div class="content" ref="content">
      <exterior-design-list :flag="!flag" @blockTitle="createListOfBlocks"/>
      <div style="border-bottom: solid 1px #130D0D;"></div>
      <ventilated-facades-list :flag="!flag" @blockTitle="createListOfBlocks"/>
    </div>
    <div class="form_for_order" v-if="isFormOpened">
        <order-form @closeForm="closeOrderForm"/>
    </div>
    <button class="portfolio-page_back-to-main" @click="openMain">На главную</button>
    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderPage from '../components/header.vue'
import FooterPage from '../components/footer.vue'
import orderForm from '../components/orderForm.vue'
import exteriorDesignList from '../components/exteriorDesignList.vue';
import ventilatedFacadesList from '../components/ventilatedFacadesList.vue';

export default {
  name: 'App',
  components:{
    HeaderPage,
    FooterPage,
    orderForm,
    exteriorDesignList,
    ventilatedFacadesList
  },
  data() {
    return {
    //   isPageShow:false,
      isScreenLocked: false,
      isFormOpened: false,
      flag: true,
      blockTypes: []
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
    },
    openMain() {
      window.scrollTo(0,0)
      this.$emit('openMain')
      console.log(this.blockTypes)
    },
    createListOfBlocks(value) {
      this.blockTypes.push(value);
    }
  },

}
</script>



<style>
.portfolio-page_back-to-main {
    display: block;
    width: 454px;
    height: 72px;
    margin: 0 auto;
    margin-top: 55px;
    /* margin-bottom: 35px; */

    background: rgba(97, 10, 10, 0.82);
    border-radius: 35px;

    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    text-align: center;

    cursor: pointer;
}

.portfolio-page_back-to-main:hover {
    background: rgba(69, 5, 5, 0.82);
}
</style>