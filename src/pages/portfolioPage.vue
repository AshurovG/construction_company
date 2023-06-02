<template>
  <div class="portfolio_page">
    <transition name="showLockinScreen">
      <div class="locking_screen" v-if="isScreenLocked" @click="closeOrderForm"></div>
    </transition>
    <header-page @openOrderForm="openOrderForm" @openMain="openMain"  @openPortfolio="openPortfolio"/>
    <div class="content" ref="content">
      <exterior-design-list/>
      <div style="border-bottom: solid 1px #130D0D;"></div>
      <ventilated-facades-list  :flag="flag"/>
    </div>
    <div class="form_for_order" v-if="isFormOpened">
        <order-form @closeForm="closeOrderForm"/>
    </div>
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
    },
  },

}
</script>



<style>

</style>