<template>
    <div class="admin_ventilated-facades-list">
        <transition name="showLockinScreen">
            <div class="locking_screen" v-if="isAddMainItemFormOpened"></div>
        </transition>
        <div v-if="!showCorrect" class="admin_ventilated-facades-list_container">
            <h1 v-if="showDesign" class="admin_ventilated-facades-list_title">Редактирование информации о наружном
                оформлении зданий
            </h1>
            <div class="admin_change_buttons">
                <button @click="isAddMainItemFormOpened = true" class="admin_btn">Добавить</button>
            </div>
            <ul v-if="showDesign" class="admin_ventilated-facades-list_items"> <!--Список карточек для фасадов-->
                <li class="admin_ventilated-facades-list_item" v-for="(exterior, index) in exteriors" :key="index">
                    <adminProductCard @onProductCardClick="onProductCardClick" :id="exterior.exterior_design_id"
                        :title="exterior.exterior_design_title" :img-url="exterior.exterior_design_url"
                        :desc="exterior.exterior_design_description" :items="exterior.items" />
                </li>
            </ul>
        </div>
        <addMainItemForm v-if="isAddMainItemFormOpened" @closeAddMainItemForm="isAddMainItemFormOpened = false"
            @goBack="goBack" />
        <changeVentilatedFacades v-if="showCorrect" :id="exterior.exterior_design_id" @goBack="goBack"
            @deleteRecord="deleteRecord" />
    </div>
</template>
  
<script>
import adminProductCard from './adminProductCard.vue';
import addMainItemForm from './addMainItemForm.vue';
import changeVentilatedFacades from './changeVentilatedFacades.vue';

export default {
    name: "ventilatedFacadesList",
    components: {
        adminProductCard,
        addMainItemForm,
        changeVentilatedFacades
    },
    mounted() {
        if (!this.isComponentCreated) {
            this.$emit("blockTitle", this.exteriorDesignListTitle);
            this.isComponentCreated = true;
        }

        this.getAllExteriorDesign()
    },
    data() {
        return {
            isComponentCreated: false,
            exteriorDesignListName: "adminExteriorDesignList",
            exteriorDesignListTitle: "Наружное оформление зданий",
            showCorrect: false,
            exterior: {
                exterior_design_id: undefined,
                exterior_design_title: undefined,
                exterior_design_url: undefined,
                exterior_design_description: undefined,
                items: undefined
            },
            exteriors: [],
            errors: [],
            isAddMainItemFormOpened: false
        }
    },
    props: {
        showDesign: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        openSlider(id) {
            console.log(`Айди такой: ${id}`)
        },
        optionForFilter() {
            this.$emit('optionForFilter', this.exteriorDesignListName)
        },
        onProductCardClick(id, title, imgUrl, desc, items) {
            this.exterior.exterior_design_id = id
            this.exterior.exterior_design_id = title
            this.exterior.exterior_design_url = imgUrl
            this.exterior.exterior_design_description = desc
            this.exterior.items = items
            this.showCorrect = true
        },
        goBack() {
            this.isAddMainItemFormOpened = false
            this.$nextTick(() => {
                this.getAllExteriorDesign()
            })
        },
        deleteRecord() {
            this.showCorrect = false
            this.$nextTick(() => {
                this.getAllExteriorDesign()
            })
        },

        // Запросы для наружного оформления
        async getAllExteriorDesign() {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            try {
                await delay(250); // Делаем задержку для того чтобы успел обработаться DELETE запрос
                const res = await fetch('http://localhost:8000/api/exteriorDesign', {
                    method: 'GET',
                    mode: 'cors'
                })
                const data = await res.json()

                if (res.status == 200 || res.status == 201) {
                    this.exteriors = data;
                    for (let i = 0; i < this.exteriors.length; i++) {
                        this.exteriors[i].items = []
                        this.getExteriorDesignItemsById(this.exteriors[i].exterior_design_id)
                    }
                    this.$forceUpdate();

                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        },

        async getExteriorDesignItemsById(id) {
            try {
                const res = await fetch('http://localhost:8000/api/exteriorDesignitems/' + id, {
                    method: 'GET',
                    mode: 'cors'
                })
                const data = await res.json()
                if (res.status == 200 || res.status == 201) {
                    for (let exterior of this.exteriors) {
                        for (let item of data) {
                            if (exterior.exterior_design_id === item.exterior_design_id) {
                                exterior.items.push(item.exterior_design_items_url)
                            }
                        }
                    }
                } else {
                    this.errors = data
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        },

        openAddMainItemForm() {
            this.isAddMainItemFormOpened = true
        },

    }
}
</script>
  
  
<style>
.admin_ventilated-facades-list_container {
    width: 100%;
    font-size: 1rem;
    margin-top: 30px;
}

.admin_ventilated-facades-list_items {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* Изменяем auto на 1fr */
    grid-auto-rows: 1fr;
    /* Добавляем эту строку для одинаковой высоты */
    /* grid-template-columns: repeat(3, auto); */
    justify-content: space-between;
    row-gap: 1vw;
    column-gap: 2vw;
    margin-bottom: 2vw;
}


.admin_ventilated-facades-list_title {
    font-style: normal;
    font-weight: 700;
    font-size: 2.5em;
    letter-spacing: -0.03em;

    margin-bottom: 25px;
}

.admin_ventilated_facades_list_description {
    font-style: normal;
    font-weight: 400;
    font-size: 2em;
    /* margin-top: 25px; заккоментил чтобы при удалении описания картинки не слипалсь с заголовком, вместо добавил margin-bottom title */
}

.admin_ventilated-facades-list_examples {
    font-style: normal;
    font-weight: 700;
    font-size: 2.5em;
    letter-spacing: -0.03em;

    margin-top: 25px;
    margin-bottom: 2vh;
}

.admin_ventilated-facades-list_button {
    display: block;
    margin: 0 auto;
    margin-bottom: 2vw;


    background: rgba(97, 10, 10, 0.82);
    border-radius: 2em;

    font-style: normal;
    font-weight: 600;
    font-size: 2.5em;
    padding: 0.8em 2em;
    letter-spacing: -0.02em;
    transition: background linear .2s;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;
}

.admin_ventilated-facades-list_button:hover {
    background: rgba(69, 5, 5, 0.82);
}

.admin_btn {
    display: inline-block;
    margin-bottom: 1em;
    /* margin-right: 2em; */
    background: rgba(97, 10, 10, 0.82);
    border-radius: 1em;
    font-style: normal;
    font-weight: 600;
    font-size: 2.5em;
    padding: 0.8em 1.5em;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;
    transition: background linear .2s;
}

.admin_btn:hover {
    background: rgba(69, 5, 5, 0.82);
}

@media(max-width:1800px) {
    .admin_ventilated-facades-list_container {
        font-size: 0.8rem;
    }
}

@media(max-width:1550px) {
    .admin_ventilated-facades-list_container {
        font-size: 0.7rem;
    }
}

@media(max-width: 1340px) {
    .admin_ventilated-facades-list_container {
        font-size: 0.5rem;
    }

    .admin_ventilated-facades-list_title {
        font-size: 24px;
    }

}

@media(max-width: 800px) {
    .admin_ventilated-facades-list_items {
        grid-template-columns: repeat(2, auto);
    }

    .admin_ventilated-facades-list_title {
        font-size: 20px;
    }
}

@media(max-width: 564px) {
    .admin_ventilated-facades-list_button {
        font-size: 16px;
    }
}

@media(max-width: 380px) {
    .admin_ventilated-facades-list_title {
        font-size: 17px;
    }
}
</style>
  