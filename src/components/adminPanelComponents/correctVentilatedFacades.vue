<template>
    <div class="correct_ventilated_facades">
        <h1 class="correct_ventilated_facades_title">Главное фото объекта</h1>
        <!-- <adminProductCard class="admin_product_card" :id="id" :title="title" :img-url="imgUrl" :desc="desc"
            :items="items" /> -->
        <div class="one_ventilated_facade_container">
            <div class="correct_one_facade_btns">
                <button class="correct_one_facade_btn">Изменить</button>
                <button class="correct_one_facade_btn">Удалить</button>
            </div>
            <img class="card_image" :src="imgUrl" alt="">
        </div>
        <h1 class="correct_ventilated_facades_title">Дополнительные фото</h1>
        <adminDetailedProductCardsSlider :desc="desc" :items="items" />
        <deleteWindow />
    </div>
</template>

<script>
import adminDetailedProductCardsSlider from "./adminDetailedProductCardsSlider.vue";
import deleteWindow from "./deleteWindow.vue"

export default {
    name: "CorrectVentilatedFacades",
    components: {
        // adminProductCard,
        adminDetailedProductCardsSlider,
        deleteWindow
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

<style>
.correct_ventilated_facades {
    font-size: 1rem;
}

.correct_ventilated_facades_title {
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    letter-spacing: -0.03em;

    margin-bottom: 1em;
}

.one_ventilated_facade_container {
    display: flex;
    margin-bottom: 2em;
}

.card_image {
    /* display: block;
    width: 70%;
    margin: 0 auto; */
    width: 70%;
    height: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.correct_one_facade_btns {
    display: flex;
    flex-direction: column;
    margin-right: 2em;
    font-size: 1rem;
}

.correct_one_facade_btn {
    display: block;
    margin: 0 auto;
    margin-bottom: 2vw;

    background: rgba(97, 10, 10, 0.82);
    border-radius: 1em;

    font-style: normal;
    font-weight: 600;
    font-size: 1.2em;
    width: 8em;
    height: 3em;
    letter-spacing: -0.02em;
    transition: background linear .2s;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;
}

.correct_one_facade_btn:hover {
    background: rgba(69, 5, 5, 0.82);
}



@media(max-width: 600px) {
    .correct_ventilated_facades {
        font-size: .8rem;
    }

    .one_ventilated_facade_container {
        display: block;
    }

    .card_image {
        width: 90%;
    }

    .correct_one_facade_btns {
        font-size: .8rem;
        flex-direction: row;
    }

    .correct_one_facade_btn {
        margin: 0 1em 1em 0;
    }
}

@media(max-width: 480px) {
    .correct_one_facade_btns {
        font-size: .6rem;
    }
}

@media(max-width: 400px) {
    .correct_ventilated_facades {
        font-size: .6rem;
    }
}
</style>