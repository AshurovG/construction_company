<template>
  <div class="main-page">
    <transition name="showLockinScreen">
      <div class="locking_screen" v-if="isScreenLocked" @click="closeOrderForm"></div>
    </transition>
    <header-page @openOrderForm="openOrderForm"  @openPortfolio="openPortfolio" @scrollToAnchor="scrollToAnchor"/>
    <div class="content" ref="content">
      <about-company-page></about-company-page>
      <div style="border-bottom: solid 1px #130D0D;"></div>
      <exterior-design-list :openInMain="flag" @openPortfolioDesigns="openPortfolioDesigns" id="services" style="scroll-margin-top: 150px;"/>
      <div style="border-bottom: solid 1px #130D0D;"></div>
      <ventilated-facades-list  :openInMain="flag"/>
      <div style="border-bottom: solid 1px #130D0D;"></div>
      <question-list id="faqs"/>
    </div>
    <div class="form_for_order" v-if="isFormOpened">
        <order-form @closeForm="closeOrderForm"/>
    </div>
    <footer-page id="contacts"></footer-page>
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
    ventilatedFacadesList,
  },
  mounted() {
    console.log('перешли из портфолио')
    if(this.$route.query.anch) {
      const el = document.getElementById(this.$route.query.anch);
      setTimeout(() => {
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      }, 100);
    }
  },//чтобы мы могли переходить к якорю из portfoliopage

  data() {
    return {
      // isPageShow:true,
      isScreenLocked: false,
      isFormOpened: false,
      flag: true,
      selectedAnchor: ''
    }
  },
  methods: {
    openOrderForm() {
      this.isFormOpened = true
      this.isScreenLocked = true
    },

    scrollToAnchor(param) {
      this.selectedAnchor=param
      if (this.selectedAnchor) {
      const el = document.getElementById(this.selectedAnchor);
      setTimeout(() => {
      if (el) {
        el.scrollIntoView({ behavior: 'smooth'});
      }
      }, 100);
    }
    },


    closeOrderForm() {
      this.isFormOpened = false
      this.isScreenLocked = false
    },
    openPortfolio() {
      this.$emit('openPortfolio')
    },
    openPortfolioDesigns() {
        console.log("2222")
        this.$emit('openPortfolioDesigns')
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
  z-index: 5000;
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
