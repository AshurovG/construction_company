<template>
  <div class="portfolio_page">
    <transition name="showLockinScreen">
      <div class="locking_screen" v-if="isScreenLocked" @click="closeOrderForm"></div>
    </transition>
    <header-page @openOrderForm="openOrderForm" @openMain="openMain" />
    <div class="content" ref="content">
      <h1 class="portfolio-page_title">Портфолио</h1>
      <filter-block
        :options="blockTypes"
        :selected="selectedOption"
        @selectOption="selectOption"
      />

      <exterior-design-list :flag="!flag" @blockTitle="createListOfBlocks" v-show="showDesign"/>
      <div style="border-bottom: solid 1px #130D0D;" v-show="showDesign&&showFacades"></div>
      <ventilated-facades-list :flag="!flag" @blockTitle="createListOfBlocks" v-show="showFacades"/>

    </div>
    <div class="form_for_order" v-if="isFormOpened">
        <order-form @closeForm="closeOrderForm"/>
    </div>
    <button class="portfolio-page_back-to-main" @click="$router.push({name: 'home'})">На главную</button>
    <footer-page id="contacts"></footer-page>
  </div>
</template>

<script>
import HeaderPage from '../components/header.vue'
import FooterPage from '../components/footer.vue'
import orderForm from '../components/orderForm.vue'
import exteriorDesignList from '../components/exteriorDesignList.vue';
import ventilatedFacadesList from '../components/ventilatedFacadesList.vue';
import filterBlock from '../components/filterBlock.vue';

export default {
  name: 'App',
  components:{
    HeaderPage,
    FooterPage,
    orderForm,
    exteriorDesignList,
    ventilatedFacadesList,
    filterBlock
  },
  data() {
    return {
    //   isPageShow:false,
      isScreenLocked: false,
      isFormOpened: false,
      flag: true,
      blockTypes: ['Все работы'],
      selectedOption: 'Все работы',
      showDesign:true,
      showFacades:true
    }
  },
  props:{
    selectedInMain: String
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
    },
    createListOfBlocks(value) {
      this.blockTypes.push(value);
    },
    selectOption(option) {
        if(option=='Вентилируемы фасады'){
            this.selectedOption=option
            this.showDesign=false
            this.showFacades=true
        } else if(option=='Наружное оформление зданий'){
            this.selectedOption=option
            this.showDesign=true
            this.showFacades=false
        } else {
            this.selectedOption='Все работы'
            this.showDesign=true
            this.showFacades=true
        }
    },
  },
  mounted() {
    console.log(this.selectedInMain)
  }

}
</script>



<style>
.portfolio_page {
  margin-top: 170px; /* Сделал для отступа от фиксированного хедера! */
}

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

.portfolio-page_title {
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    letter-spacing: -0.03em;

    margin-top: 30px;
    margin-bottom: 25px;
    margin-right: 60px;
    display: inline-block;
}

.portfolio-page_back-to-main:hover {
    background: rgba(69, 5, 5, 0.82);
}
</style>