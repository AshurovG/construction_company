<template>
  <div class="admin_ventilated-facades-list">
    <transition name="showLockinScreen">
      <div class="locking_screen" v-if="isAddMainItemFormOpened" @click="isAddMainItemFormOpened = false"></div>
    </transition>
    <div class="admin_ventilated-facades-list_container">
      <h1 class="admin_ventilated-facades-list_title">Редактирование информации о вентилируемых фасадах
      </h1>
      <div class="admin_change_buttons">
        <button @click="isAddMainItemFormOpened = true" class="admin_btn">Добавить</button>
      </div>
      <ul class="admin_ventilated-facades-list_items">
        <li class="admin_ventilated-facades-list_item" v-for="(product, index) in products.slice(0, 9)" :key="index">
          <adminProductCard @onProductCardClick="onProductCardClick" :id="product.ventilated_facades_id"
            :title="product.ventilated_facades_title" :img-url="product.ventilated_facades_url"
            :desc="product.ventilated_facades_description" :items="product.items" />
        </li>
      </ul>
    </div>
    <addMainItemForm v-if="isAddMainItemFormOpened" @closeAddMainItemForm="isAddMainItemFormOpened = false" />
  </div>
</template>

<script>
import adminProductCard from './adminProductCard.vue';
import addMainItemForm from './addMainItemForm.vue';

export default {
  name: "ventilatedFacadesList",
  components: {
    adminProductCard,
    addMainItemForm
  },
  mounted() {
    if (!this.isComponentCreated) {
      this.$emit("blockTitle", this.ventilatedFacadesListTitle);
      this.isComponentCreated = true;
    }

    this.getAllVentilatedFacades()
  },
  data() {
    return {
      isComponentCreated: false,
      ventilatedFacadesListName: "adminVentilatedFacadesList",
      ventilatedFacadesListTitle: "Вентилируемые фасады",
      products: [],
      errors: [],
      isAddMainItemFormOpened: false
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
      this.$emit('onProductCardClick', id, title, imgUrl, desc, items)
    },
    async getAllVentilatedFacades() {
      try {
        const res = await fetch('http://localhost:8000/api/ventilatedfacades', {
          method: 'GET',
          mode: 'cors'
        })
        const data = await res.json()
        if (res.status == 200 || res.status == 201) {
          this.products = data;
          for (var i = 0; i < this.products.length; i++) {
            this.products[i].items = []
            this.getVentilatedFacadeItemsById(this.products[i].ventilated_facades_id)
          }
          console.log(data)
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
          for (let product of this.products) {
            for (let item of data) {
              if (product.ventilated_facades_id === item.ventilated_facades_id) {
                product.items.push(item.ventilated_facade_items_url)
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
      console.log(this.isAddMainItemFormOpened)
    }
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
  grid-template-columns: repeat(3, auto);
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
