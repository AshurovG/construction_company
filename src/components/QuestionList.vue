<template>
    <div class="content">
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
                    a:'Первый ответ',
                    open:false
                },
                {
                    q:'Второй вопрос',
                    a:'Второй ответ',
                    open:false
                },
                {
                    q:'Третий вопрос',
                    a:'Третий ответ',
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
.ques-list {
    list-style-type: none;
}

.arrow-icon {
    width: 10px;
    display: inline-block;
}

.faq {
    display: block;
    margin: 15px auto;
}

.faq .question {
    position: relative;
    color: #000;
    font-size: 1.2rem;
    transition: all 0.4s linear;
}


.faq.open .question {
    margin-bottom: 15px;
}

.faq.open .arrow-icon {
    transform: rotate(180deg);
}



.faq .answer {
    margin-left: 15px;
    color: #000;
    font-size: 1.2rem;
    max-height: 0px;
    overflow-y: hidden;
    transition: all 0.4s ease-in-out;

}

.faq.open .vertical-line {
    display: inline-block;

    border-left: 3px solid #000;
    height: 30px;
    left: 50%;
    margin-left: 0px;
    top: 60px;
    /* position: absolute; */
}

.faq.open .answer {
    max-height: 1000px;
    position: relative;
}

</style>