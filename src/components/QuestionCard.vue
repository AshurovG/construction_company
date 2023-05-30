<template>
<div class="question-card">
    <div :class="open ? 'faq open' : 'faq'" @click="$emit('ansOpen', index)">
        <div class="question">
            <span><img class="arrow-icon" src="./arrow-down-sign-to-navigate.png" alt=""></span>
            {{ question }}
        </div>
        <div class="answer">
            {{ answer }}
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
</style>

