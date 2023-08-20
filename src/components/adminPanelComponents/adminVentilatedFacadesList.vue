<template>
  <div class="admin_ventilated-facades-list">
    <transition name="showLockinScreen">
      <div class="locking_screen" v-if="isAddMainItemFormOpened"></div>
    </transition>
    <div v-if="!showCorrect" class="admin_ventilated-facades-list_container">
      <h1 class="admin_ventilated-facades-list_title">Редактирование информации о вентилируемых фасадах
      </h1>
      <div class="admin_change_buttons">
        <button @click="isAddMainItemFormOpened = true" class="admin_btn">Добавить</button>
      </div>
      <ul class="admin_ventilated-facades-list_items">
        <li class="admin_ventilated-facades-list_item" v-for="(facade, index) in facades" :key="index">
          <adminProductCard @onProductCardClick="onProductCardClick" :id="facade.ventilated_facades_id"
            :title="facade.ventilated_facades_title" :img-url="facade.ventilated_facades_url"
            :desc="facade.ventilated_facades_description" :items="facade.items" />
        </li>
      </ul>
    </div>
    <addMainItemForm v-if="isAddMainItemFormOpened" @closeAddMainItemForm="isAddMainItemFormOpened = false"
      @goBack="goBack" />
    <changeVentilatedFacades v-if="showCorrect" :id="facade.ventilated_facades_id" @goBack="goBack"
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
      this.$emit("blockTitle", this.ventilatedFacadesListTitle);
      this.isComponentCreated = true;
    }

    this.getAllVentilatedFacades(0)
  },
  data() {
    return {
      isComponentCreated: false,
      ventilatedFacadesListName: "adminVentilatedFacadesList",
      ventilatedFacadesListTitle: "Вентилируемые фасады",
      showCorrect: false,
      facade: {
        ventilated_facades_id: undefined,
        ventilated_facades_title: undefined,
        ventilated_facades_url: undefined,
        ventilated_facades_description: undefined,
        items: undefined
      },
      facades: [],
      errors: [],
      isAddMainItemFormOpened: false
    }
  },
  props: {
    showFacades: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    openSlider(id) {
      console.log(`Айди такой: ${id}`)
    },
    optionForFilter() {
      this.$emit('optionForFilter', this.ventilatedFacadesListName)
    },
    onProductCardClick(id, title, imgUrl, desc, items) {
      this.facade.ventilated_facades_id = id
      this.facade.ventilated_facades_title = title
      this.facade.ventilated_facades_url = imgUrl
      this.facade.ventilated_facades_description = desc
      this.facade.items = items
      this.showCorrect = true
    },
    goBack() {
      this.isAddMainItemFormOpened = false
      this.$nextTick(() => {
        this.getAllVentilatedFacades()
      })
    },
    deleteRecord() {
      this.showCorrect = false
      this.$nextTick(() => {
        this.getAllVentilatedFacades()
      })
    },
    async getAllVentilatedFacades() {
      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      try {
        await delay(250); // Делаем задержку для того чтобы успел обработаться DELETE запрос
        const res = await fetch('http://localhost:8000/api/ventilatedfacades', {
          method: 'GET',
          mode: 'cors'
        })
        console.log("ререндер")

        const data = await res.json()
        console.log(data)

        if (res.status == 200 || res.status == 201) {
          this.facades = data;
          for (let i = 0; i < this.facades.length; i++) {
            this.facades[i].items = []
            this.getVentilatedFacadeItemsById(this.facades[i].ventilated_facades_id)
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

    async getVentilatedFacadeItemsById(id) {
      try {
        const res = await fetch('http://localhost:8000/api/ventilatedfacadeitems/' + id, {
          method: 'GET',
          mode: 'cors'
        })
        const data = await res.json()
        if (res.status == 200 || res.status == 201) {
          for (let facade of this.facades) {
            for (let item of data) {
              if (facade.ventilated_facades_id === item.ventilated_facades_id) {
                facade.items.push(item.ventilated_facade_items_url)
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

/* .locking_screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(61, 30, 30, 0.52);
  backdrop-filter: blur(2px);
  z-index: 5000;
} */

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
