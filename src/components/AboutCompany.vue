<template>
    <div class="about-company">
        <div class="title">
            <h1 class="title"> О компании </h1>
        </div>
        <div class="about-company_description">
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
    margin-top: 200px; /* Сделал для отступа от фиксированного хедера! */
    margin-bottom: 30px;
}

.title {
    font-size: 2.5rem;
    font-weight: 700;

    margin-bottom: 1.8rem;
}

.about-company_description {
    /* font-style: normal; */
    font-weight: 400;
    font-size: 2rem;
}
</style>