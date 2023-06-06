<template>
    <div>
        <h1 class="faq-title">Часто задаваемые вопросы</h1>
        <ul class="ques-list">
            <li
            v-for="(faq,index) in faqs"
            :key="index">
                <question-card
                :question="faq.q"
                :answer="faq.a"
                :open="faq.open"
                :index="index"
                @click="()=> ansOpen(index)"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import QuestionCard from './QuestionCard.vue'
export default {
    name: 'QuestionList',
    components: {
        QuestionCard
    },
    data(){
        return{
            faqs: [
                {
                    q:'Первый вопрос',
                    a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                    open:false
                },
                {
                    q:'Второй вопрос',
                    a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                    open:false
                },
                {
                    q:'Третий вопрос',
                    a:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                    open:false
                },
            ]
        }
    },

    methods: {
        ansOpen: function (index) {
        this.faqs = this.faqs.map((faq, i) => {
            if (index === i) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }

            return faq;
        });
        }
    }

}
</script>

<style>
.faq-title {
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: -0.03em;

    margin-top: 25px;
    margin-bottom: 20px;
}

.ques-list {
    list-style-type: none;
}



</style>