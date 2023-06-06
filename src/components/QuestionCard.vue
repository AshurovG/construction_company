<template>
<div class="question-card">
    <div :class="open ? 'faq open' : 'faq'" @click="$emit('ansOpen', index)">
        <div class="question">
            <span><img class="arrow-icon" src="./assets/arrow-down-sign-to-navigate.png" alt=""></span>
            {{ question }}
        </div>
        <div class="answer">
            <div class="answer-self">{{ answer }}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'QuestionCard',
    props: ['question','answer','open'],
}
</script>

<style>
.question-card {
    position: relative;

}

.question:hover {
    cursor: pointer;
}

.answer{
    border-left: 3px solid #610a0a;

    padding-left: 30px;
    display: flex;
    align-items: center;
    gap:5.5px
}

.arrow-icon {
    width: 0.7em;
    display: inline-block;
}

.faq {
    display: block;
    margin: 15px auto;
    font-size: 2rem;
    font-weight: 400;
}

.faq .question {
    position: relative;
    color: #000;

    transition: all 0.9s linear;
}


.faq.open .question {
    margin-bottom: 15px;
    color: #610a0a;
}

.faq.open .arrow-icon {
    transform: rotate(180deg);
}



.faq .answer {
    margin-left: 10.3px;
    color: #000;
    /* font-size: 1.2rem; */
    max-height: 0px;
    overflow-y: hidden;
    transition: all 0.5s ease-in-out;
}


.faq.open .answer {
    max-height: 1000px;
    position: relative;
    transition: all 2.6s linear;
}
</style>

