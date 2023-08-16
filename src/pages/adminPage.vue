<template>
    <div class="admin_page">
        <headerForAdmin />
        <div class="content" ref="content">
            <div class="portfolio-page_starter">
                <adminFilterBlock class="portfolio-page_filter" :options="blockTypes" :selected="selectedOption"
                    @selectOption="selectOption" />
            </div>
            <exterior-design-list :flag="!flag" @blockTitle="createListOfBlocks" v-show="showDesign && !showCorrect" />
            <div style="border-bottom: solid 1px #130D0D;" v-show="showDesign && showFacades"></div>
            <adminVentilatedFacadesListVue ref="listRef" :flag="!flag" :showFacades="showFacades"
                @onProductCardClick="onProductCardClick" @blockTitle="createListOfBlocks"
                v-show="showFacades && !showCorrect" @optionForFilter="optionForFilter" />
            <QuestionList :flag="!flag" @blockTitle="createListOfBlocks" v-show="showQuestions && !showCorrect"
                @optionForFilter="optionForFilter" />
            <correctVentilatedFacades v-if="showCorrect" :id="product.ventilated_facades_id"
                :title="product.ventilated_facades_title" :img-url="product.ventilated_facades_url"
                :desc="product.ventilated_facades_description" :items="product.items" @deleteRecord="deleteRecord" />
        </div>
        <footer-page id="contacts"></footer-page>
    </div>
</template>
  
<script>
import headerForAdmin from '@/components/headerForAdmin.vue';
import FooterPage from '../components/footer.vue'
import exteriorDesignList from '../components/exteriorDesignList.vue';
import adminVentilatedFacadesListVue from '@/components/adminPanelComponents/adminVentilatedFacadesList.vue';
import QuestionList from '@/components/QuestionList.vue';
import adminFilterBlock from "../components/adminPanelComponents/adminFilterBlock.vue"
import correctVentilatedFacades from '@/components/adminPanelComponents/correctVentilatedFacades.vue';

export default {
    name: 'App',
    components: {
        headerForAdmin,
        FooterPage,
        exteriorDesignList,
        adminVentilatedFacadesListVue,
        adminFilterBlock,
        QuestionList,
        correctVentilatedFacades
    },
    data() {
        return {
            //   isPageShow:false,
            flag: true,
            blockTypes: ['Часто задаваемые вопросы'],
            selectedOption: 'Часто задаваемые вопросы',
            showDesign: false,
            showFacades: false,
            showQuestions: true,
            showCorrect: false,
            product: {
                ventilated_facades_id: undefined,
                ventilated_facades_title: undefined,
                ventilated_facades_url: undefined,
                ventilated_facades_description: undefined,
                items: undefined
            }
        }
    },
    props: {
        selectedInMain: String
    },
    methods: {
        createListOfBlocks(value) {
            this.blockTypes.push(value);
        },
        selectOption(option) {
            if (option == 'Вентилируемые фасады') {
                this.selectedOption = option
                this.showDesign = false
                this.showFacades = true
                this.showQuestions = false
                this.showCorrect = false
            } else if (option == 'Наружное оформление зданий') {
                this.selectedOption = option
                this.showDesign = true
                this.showFacades = false
                this.showQuestions = false
                this.showCorrect = false
            } else {
                this.selectedOption = 'Часто задаваемые вопросы'
                this.showQuestions = true
                this.showDesign = false
                this.showFacades = false
                this.showCorrect = false
            }
        },
        onProductCardClick(id, title, imgUrl, desc, items) {
            console.log(id, title, imgUrl, desc, items)
            this.product.ventilated_facades_id = id
            this.product.ventilated_facades_url = imgUrl
            this.product.ventilated_facades_description = desc
            this.product.items = items
            this.showCorrect = true;
        },
        deleteRecord() {
            this.showCorrect = false
            this.selectedOption = 'Часто задаваемые вопросы'
            this.showQuestions = false
            this.showDesign = false
            this.showFacades = true
            this.$nextTick(() => { // Для моментального удаления фасада вызываем метод дочернего объекта
                this.$refs.listRef.getAllVentilatedFacades(0);
            })
        }
    },

}
</script>
  
  
  
<style>
.admin_page {
    font-size: 1rem;
}

.portfolio-page_starter {
    font-size: 1em;
    padding-right: 1rem;

    margin-top: 13em;

    min-width: 550px;
    display: flex;
    width: 75%;
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
    margin-right: 80px;
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

@media(max-width: 1340px) {
    .portfolio-page_starter {
        font-size: 0.5rem;
        margin-top: 16em;
    }

    .portfolio_page {
        font-size: 0.5rem;
    }

    .portfolio-page_title {
        font-size: 24px;
    }

}

@media(max-width: 564px) {
    .portfolio-page_starter {
        flex-wrap: wrap;
        min-width: 290px;
    }

    .portfolio-page_title {
        margin-bottom: 10px;
    }

    .portfolio-page_filter {
        font-size: 7px;
        width: 100%;
    }

    .portfolio-page_back-to-main {
        font-size: 16px;
    }
}
</style>