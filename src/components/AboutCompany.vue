<template>
    <div class="about-company">
        <div class="title">
            <h1 class="title"> О компании </h1>
        </div>
        <div class="company-description">
            <p>То есть надо продумать текст, из которого будет всем ясно, что это за фирма, чем занимается, какие есть
            услуги, и вообще надо что-то написать, я сейчас просто заполняю любым текстом, чтобы было понятно,
            как выглядит дизайн. Вообще лучше будет если это описание будет без картинок, то есть вот так текст на
            всю ширину страницы.
            </p>
            <p style="margin-top:30px;">И дальше в 1-2 предложениях переход к услугам (наружное оформление зданий и вентилируемые
            фасады).</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"AboutCompanyPage"
}
</script>

<style>
.about-company {
    margin-top: 170px; /* Сделал для отступа от фиксированного хедера! */
    margin-bottom: 30px;
}

.title {
    font-size: 2rem;
    margin-bottom: 30px;
}

.company-description {
    font-size: 1.2rem;
}
</style>