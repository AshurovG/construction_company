<template>
    <div class="correct_ventilated_facades">
        <h1 class="correct_ventilated_facades_title">Главное фото объекта</h1>
        <adminProductCard :id="id" :title="title" :img-url="imgUrl" :desc="desc" :items="items" />
        <h1 class="correct_ventilated_facades_title">Дополнительные фото </h1>
        <adminDetailedProductCardsSlider :desc="desc" :items="items" />
    </div>
</template>

<script>
import adminProductCard from "./adminProductCard.vue"
import adminDetailedProductCardsSlider from "./adminDetailedProductCardsSlider.vue";

export default {
    name: "CorrectVentilatedFacades",
    components: {
        adminProductCard,
        adminDetailedProductCardsSlider
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },

}
</script>

<style></style>