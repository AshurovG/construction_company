<template>
    <div class="change_ventilated_facades">
        <transition name="showLockinScreen">
            <div class="locking_screen" v-if="isDeleteWindowOpened || isChangeWindowOpened"></div>
        </transition>
        <h1 class="change_ventilated_facades_title">Главное фото объекта</h1>
        <div class="one_ventilated_facade_container">
            <div class="change_one_facade_btns">
                <button @click="changeVentilatedFacade" class="change_one_facade_btn">Изменить</button>
                <button @click="deleteVentilatedFacade" class="change_one_facade_btn">Удалить</button>
            </div>
            <img v-show="isFacade" class="card_image" :src="facade.ventilated_facades_url" alt="">
            <img v-show="!isFacade" class="card_image" :src="exterior.exterior_design_url" alt="">
        </div>
        <h1 class="change_ventilated_facades_title">Дополнительные фото</h1>
        <adminDetailedProductCardsSlider v-show="isFacade" :id="id" :title="facade.ventilated_facades_title"
            :desc="facade.ventilated_facades_description" :items="facade.items" @closeAddItemForm="closeAddItemForm"
            @goBack="closeAddItemForm" @deleteItem="deleteItem" />
        <adminDetailedProductCardsSlider v-show="!isFacade" :id="id" :title="exterior.ventilated_facades_title"
            :desc="exterior.ventilated_facades_description" :items="exterior.items" @closeAddItemForm="closeAddItemForm"
            @goBack="closeAddItemForm" @deleteItem="deleteItem" />
        <deleteWindow v-if="isDeleteWindowOpened" @deleteRecord="deleteRecord" @cancelDelete="cancelDelete" />
        <changeMainItemForm :id="id" :title="facade.ventilated_facades_title" :desc="facade.ventilated_facades_description"
            :imgUrl="facade.ventilated_facades_url" v-if="isChangeWindowOpened" @goBack="goBack"
            @closeAddMainItemForm="closeAddMainItemForm" />
    </div>
</template>

<script>
import adminDetailedProductCardsSlider from "./adminDetailedProductCardsSlider.vue";
import deleteWindow from "./deleteWindow.vue"
import changeMainItemForm from "./changeMainItemForm.vue";

export default {
    name: "ChangeVentilatedFacades",
    components: {
        adminDetailedProductCardsSlider,
        deleteWindow,
        changeMainItemForm
    },
    data() {
        return {
            isDeleteWindowOpened: false,
            isChangeWindowOpened: false,
            facade: {
                ventilated_facades_title: undefined,
                ventilated_facades_url: undefined,
                ventilated_facades_description: undefined,
                items: [],
            },
            exterior: {
                exterior_design_title: undefined,
                exterior_design_url: undefined,
                exterior_design_description: undefined,
                items: []
            }
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        isFacade: {
            type: Boolean,
            required: true
        }
    },
    mounted() {
        if (this.isFacade) {
            this.getVentilatedFacadeById(this.id)
        } else {
            this.getExteriorDesignById(this.id)
        }
        console.log(`id is ${this.id}`)
    },
    methods: {
        deleteVentilatedFacade() {
            this.isDeleteWindowOpened = true
        },
        changeVentilatedFacade() {
            this.isChangeWindowOpened = true
        },
        closeAddMainItemForm() {
            this.isChangeWindowOpened = false
        },
        deleteRecord() {
            this.isDeleteWindowOpened = false
            this.deleteVentilatedFacadeById(this.id)
            this.$emit('deleteRecord')
        },
        deleteItem() {
            this.isDeleteWindowOpened = false
            this.$nextTick(() => {
                this.getVentilatedFacadeById(this.id)
            })
        },
        cancelDelete() {
            this.isDeleteWindowOpened = false
        },
        goBack() {
            this.isChangeWindowOpened = false
            this.$nextTick(() => {
                this.getVentilatedFacadeById(this.id)
            })
            this.$emit('goBack')
        },

        closeAddItemForm() {
            this.$nextTick(() => {
                this.getVentilatedFacadeById(this.id)
            })
        },

        // Запросы для фасадов
        async getVentilatedFacadeById(id) {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            try {
                await delay(200); // Делаем задержку для того чтобы успел обработаться DELETE запрос
                const res = await fetch('http://localhost:8000/api/ventilatedfacades/' + id, {
                    method: 'GET',
                    mode: 'cors'
                })
                console.log('getVentilatedFacadeById')
                const data = await res.json()

                if (res.status == 200 || res.status == 201) {
                    this.facade.ventilated_facades_title = data.ventilated_facades_title;
                    this.facade.ventilated_facades_url = data.ventilated_facades_url;
                    this.facade.ventilated_facades_description = data.ventilated_facades_description;
                    this.facade.items = []
                    this.getVentilatedFacadeItemsById(this.id)

                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        },

        async getVentilatedFacadeItemsById(id) {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            try {
                await delay(100); // Делаем задержку для того чтобы успел обработаться POST запрос
                const res = await fetch('http://localhost:8000/api/ventilatedfacadeitems/' + id, {
                    method: 'GET',
                    mode: 'cors'
                })
                const data = await res.json()
                if (res.status == 200 || res.status == 201) {
                    for (let item of data) {
                        this.facade.items.push({
                            url: item.ventilated_facade_items_url,
                            id: item.ventilated_facade_items_id
                        })
                    }
                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        },

        async deleteVentilatedFacadeById(id) {
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
        },

        // Запросы для наружного оформления

        async getExteriorDesignById(id) {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            try {
                await delay(200); // Делаем задержку для того чтобы успел обработаться DELETE запрос
                const res = await fetch('http://localhost:8000/api/exteriordesign/' + id, {
                    method: 'GET',
                    mode: 'cors'
                })
                const data = await res.json()
                if (res.status == 200 || res.status == 201) {
                    this.exterior.exterior_design_title = data.exterior_design_title;
                    this.exterior.exterior_design_url = data.exterior_design_url;
                    this.exterior.exterior_design_description = data.exterior_design_description;
                    this.exterior.items = []
                    this.getExteriorDesignItemsById(this.id)
                    console.log(`url exterior ${this.exterior.exterior_design_url}`)

                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        },

        async getExteriorDesignItemsById(id) {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            try {
                await delay(100); // Делаем задержку для того чтобы успел обработаться POST запрос
                const res = await fetch('http://localhost:8000/api/exteriordesignitems/' + id, {
                    method: 'GET',
                    mode: 'cors'
                })
                const data = await res.json()
                if (res.status == 200 || res.status == 201) {
                    for (let item of data) {
                        this.facade.items.push({
                            url: item.exterior_design_items_url,
                            id: item.exterior_design_items_id
                        })
                    }
                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        },

        async deleteExteriorDesignItemsById(id) {
            try {
                const res = await fetch('http://localhost:8000/api/exteriordesign/' + id, {
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
.change_ventilated_facades {
    font-size: 1rem;
}

.change_ventilated_facades_title {
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

.change_one_facade_btns {
    display: flex;
    flex-direction: column;
    margin-right: 2em;
    font-size: 1rem;
}

.change_one_facade_btn {
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

.change_one_facade_btn:hover {
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
    .change_ventilated_facades {
        font-size: .8rem;
    }

    .one_ventilated_facade_container {
        display: block;
    }

    .card_image {
        width: 90%;
    }

    .change_one_facade_btns {
        font-size: .8rem;
        flex-direction: row;
    }

    .change_one_facade_btn {
        margin: 0 1em 1em 0;
    }
}

@media(max-width: 480px) {
    .change_one_facade_btns {
        font-size: .6rem;
    }
}

@media(max-width: 400px) {
    .change_ventilated_facades {
        font-size: .6rem;
    }
}
</style>