<template>
  <div class="portfolio_page">
        <transition name="showLockinScreen">
        <div class="locking_screen" v-if="isScreenLocked" @click="closeOrderForm"></div>
        </transition>
        <header-page @openOrderForm="openOrderForm" @openMain="openMain" />
        <div class="content" ref="content">
            <div class="portfolio-page_starter">
                <h1 class="portfolio-page_title">Портфолио</h1>
                <filter-block class="portfolio-page_filter"
                    :options="blockTypes"
                    :selected="selectedOption"
                    @selectOption="selectOption"
                />
            </div>
            <exterior-design-list :flag="!flag" @blockTitle="createListOfBlocks" v-show="showDesign"/>
            <div style="border-bottom: solid 1px #130D0D;" v-show="showDesign&&showFacades"></div>
            <ventilated-facades-list :flag="!flag" @blockTitle="createListOfBlocks" v-show="showFacades"
            @optionForFilter="optionForFilter"/>

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
    optionForFilter() {
      console.log('222222222')
    },
    selectOption(option) {
        if(option=='Вентилируемые фасады'){
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
    console.log(this.$route.params)
    console.log(this.selectedInMain)
  }

}
</script>



<style>
.portfolio_page {
    font-size: 1rem;
}

.portfolio-page_starter {
    font-size: 1em;

    margin-top: 13em;

    display: flex;
    width: 70%;
    align-items: flex-start;
    justify-content: space-between;
}
.portfolio-page_filter {
    position: relative;

}

.portfolio-page_back-to-main {
  display: block;
  margin: 0 auto;
  margin-bottom: 2vw;

  background: rgba(97, 10, 10, 0.82);
  border-radius: 2em;

  font-style: normal;
  font-weight: 600;
  font-size: 2.5em;
  padding: 0.8em 4em;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  text-align: center;
  cursor: pointer;
}

.portfolio-page_title {
    font-weight: 700;
    font-size: 2.5em;
    letter-spacing: -0.03em;

    margin-top: 5px;
    margin-bottom: 25px;
    margin-right: 90px;
    display: inline-block;


}

.portfolio-page_back-to-main:hover {
    background: rgba(69, 5, 5, 0.82);
    /* background: rgba(135, 15, 15, 0.82); */

}

@media(max-width:1800px) {
  .portfolio-page_starter {
    font-size: 0.8rem;
  }
  .portfolio_page {
    font-size: 0.8rem;
  }

}

@media(max-width:1550px) {
  .portfolio-page_starter {
    font-size: 0.7rem;
  }
  .portfolio_page {
    font-size: 0.7rem;
  }
}

@media(max-width: 1340px){
  .portfolio-page_starter {
    font-size: 0.5rem;
    margin-top: 16em;
  }
  .portfolio_page {
    font-size: 0.5rem;
  }
  .portfolio-page_title  {
    font-size: 24px;
  }

}


</style>