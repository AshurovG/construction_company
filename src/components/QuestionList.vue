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
                    a:'Первый ответ ldsfjklfjkds fd dsflkj kdlf lsdf lsd f f fkjjkdkkdkjf djfkdjfkdfjldjfl df ldkjflkjdfldkfjdf  dlfj;lsdjfldksjf dfsf kdlsfj;ldfsj',
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
        font-size: 1.8rem;
}

.faq .question {
    position: relative;
    color: #000;

    transition: all 0.4s linear;
}


.faq.open .question {
    margin-bottom: 15px;
    color: #610a0a;
}

.faq.open .arrow-icon {
    transform: rotate(180deg);
}



.faq .answer {
    margin-left: 4.3px;
    color: #000;
    /* font-size: 1.2rem; */
    max-height: 0px;
    overflow-y: hidden;
    transition: all 0.4s ease-in-out;

}

.faq .vertical-line {
    display: inline-block;

    border-left: 2px solid #000;
    height: 30px;
    padding-right: 25px;

    border-color: #610a0a;
    /* left: 50%;
    margin-left: 0px;
    top: 60px; */
    /* position: absolute; */
}

.faq.open .answer {
    max-height: 1000px;
    position: relative;
}

</style>