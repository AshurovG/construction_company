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
</style>

