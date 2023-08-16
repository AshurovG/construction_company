<template>
    <div class="correct_ventilated_facades">
        <transition name="showLockinScreen">
            <div class="locking_screen" v-if="isDeleteWindowOpened" @click="isDeleteWindowOpened = false"></div>
        </transition>
        <h1 class="correct_ventilated_facades_title">Главное фото объекта</h1>
        <!-- <adminProductCard class="admin_product_card" :id="id" :title="title" :img-url="imgUrl" :desc="desc"
            :items="items" /> -->
        <div class="one_ventilated_facade_container">
            <div class="correct_one_facade_btns">
                <button class="correct_one_facade_btn">Изменить</button>
                <button @click="deleteVentilatedFacade" class="correct_one_facade_btn">Удалить</button>
            </div>
            <img class="card_image" :src="imgUrl" alt="">
        </div>
        <h1 class="correct_ventilated_facades_title">Дополнительные фото</h1>
        <adminDetailedProductCardsSlider :desc="desc" :items="items" />
        <deleteWindow v-if="isDeleteWindowOpened" @deleteRecord="deleteRecord" @cancelDelete="cancelDelete" />
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
    data() {
        return {
            isDeleteWindowOpened: false,
        }
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
    methods: {
        deleteVentilatedFacade() {
            this.isDeleteWindowOpened = true
            console.log(this.isDeleteWindowOpened)
        },
        deleteRecord() {
            this.isDeleteWindowOpened = false
            console.log(this.id)
            this.deleteVentilatedFacadeItemsById(this.id)
            this.$emit('deleteRecord')
        },
        cancelDelete() {
            this.isDeleteWindowOpened = false
        },
        async deleteVentilatedFacadeItemsById(id) {
            try {
                const res = await fetch('http://localhost:8000/api/ventilatedfacades/' + id, {
                    method: 'DELETE',
                    mode: 'cors'
                })
                const data = await res.json()
                if (res.status == 200 || res.status == 201) {
                    console.log('success delete ventilated facade')
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

.locking_screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(61, 30, 30, 0.52);
    backdrop-filter: blur(2px);
    z-index: 5000;
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