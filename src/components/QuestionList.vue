<template>
    <div>
        <h1 class="faq-title">Часто задаваемые вопросы</h1>
        <ul class="ques-list">
            <li v-for="(faq, index) in faqs" :key="index">
                <question-card :question="faq.questions_title" :answer="faq.questions_text" :open="faq.open" :index="index"
                    @click="() => ansOpen(index)" />
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
    mounted() {
        this.getAllQuestions()
    },
    data() {
        return {
            faqs: [],
            errors: []
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
        },

        async getAllQuestions() {
            try {
                const res = await fetch('http://localhost:8000/api/questions', {
                    method: 'GET',
                    mode: 'cors'
                })
                const data = await res.json()
                if (res.status == 200 || res.status == 201) {
                    this.faqs = data;
                    for (var i = 0; i < this.faqs.length; i++) {
                        this.faqs[i].open = false;
                    }
                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
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

@media(max-width:1800px) {
    .faq-title {
        font-size: 2rem;
    }
}

@media(max-width:1550px) {
    .faq-title {
        font-size: 1.75rem;
    }
}

@media(max-width:1340px) {
    .faq-title {
        font-size: 1.5rem;
    }
}
</style>