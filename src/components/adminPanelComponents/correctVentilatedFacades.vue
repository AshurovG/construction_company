<template>
    <div class="correct_ventilated_facades">
        <transition name="showLockinScreen">
            <div class="locking_screen" v-if="isDeleteWindowOpened || isCorrectWindowOpened"></div>
        </transition>
        <h1 class="correct_ventilated_facades_title">Главное фото объекта</h1>
        <!-- <adminProductCard class="admin_product_card" :id="id" :title="title" :img-url="imgUrl" :desc="desc"
            :items="items" /> -->
        <div class="one_ventilated_facade_container">
            <div class="correct_one_facade_btns">
                <button @click="correctVentilatedFacade" class="correct_one_facade_btn">Изменить</button>
                <button @click="deleteVentilatedFacade" class="correct_one_facade_btn">Удалить</button>
            </div>
            <img class="card_image" :src="product.ventilated_facades_url" alt="">
        </div>
        <h1 class="correct_ventilated_facades_title">Дополнительные фото</h1>
        <adminDetailedProductCardsSlider :desc="product.ventilated_facades_description" :items="product.items" />
        <deleteWindow v-if="isDeleteWindowOpened" @deleteRecord="deleteRecord" @cancelDelete="cancelDelete" />
        <correctMainItemForm :id="id" :title="product.ventilated_facades_title"
            :desc="product.ventilated_facades_description" :imgUrl="product.ventilated_facades_url"
            v-if="isCorrectWindowOpened" @goBack="goBack" @closeAddMainItemForm="closeAddMainItemForm" />
    </div>
</template>

<script>
import adminDetailedProductCardsSlider from "./adminDetailedProductCardsSlider.vue";
import deleteWindow from "./deleteWindow.vue"
import correctMainItemForm from "./correctMainItemForm.vue";

export default {
    name: "CorrectVentilatedFacades",
    components: {
        adminDetailedProductCardsSlider,
        deleteWindow,
        correctMainItemForm
    },
    data() {
        return {
            isDeleteWindowOpened: false,
            isCorrectWindowOpened: false,
            product: {
                ventilated_facades_title: undefined,
                ventilated_facades_url: undefined,
                ventilated_facades_description: undefined,
                items: []
            },
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    mounted() {
        this.getVentilatedFacadeById(this.id)
        // console.log(this.product)
    },
    methods: {
        deleteVentilatedFacade() {
            this.isDeleteWindowOpened = true
        },
        correctVentilatedFacade() {
            this.isCorrectWindowOpened = true
        },
        closeAddMainItemForm() {
            this.isCorrectWindowOpened = false
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
        goBack() {
            this.isCorrectWindowOpened = false
            this.$nextTick(() => {
                this.getVentilatedFacadeById(this.id)
            })
            this.$emit('goBack')
        },

        async getVentilatedFacadeById(id) {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            try {
                await delay(200); // Делаем задержку для того чтобы успел обработаться DELETE запрос
                const res = await fetch('http://localhost:8000/api/ventilatedfacades/' + id, {
                    method: 'GET',
                    mode: 'cors'
                })
                const data = await res.json()

                if (res.status == 200 || res.status == 201) {
                    this.product.ventilated_facades_title = data.ventilated_facades_title;
                    this.product.ventilated_facades_url = data.ventilated_facades_url;
                    this.product.ventilated_facades_description = data.ventilated_facades_description;
                    this.getVentilatedFacadeItemsById(this.id)
                    // this.$forceUpdate();

                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        },

        async getVentilatedFacadeItemsById(id) {
            try {
                const res = await fetch('http://localhost:8000/api/ventilatedfacadeitems/' + id, {
                    method: 'GET',
                    mode: 'cors'
                })
                const data = await res.json()
                if (res.status == 200 || res.status == 201) {
                    for (let item of data) {
                        this.product.items.push(item.ventilated_facade_items_url)
                    }

                    // for (let item of data) {
                    //     if (this.product.ventilated_facades_id === item.ventilated_facades_id) {
                    //         this.product.items.push(item.ventilated_facade_items_url)
                    //     }
                    // }
                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
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