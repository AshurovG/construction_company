<template>
  <div class="ventilated-facades-list">
    <div class="ventilated-facades-list_container">
      <h1 v-if="!showFacades" class="ventilated-facades-list_title">{{ ventilatedFacadesListTitle }}</h1>
      <h1 v-if="showFacades" class="ventilated-facades-list_title">Редактирование информации о вентилируемых фасадах</h1>
      <div class="change_buttons">
        <button v-if="showFacades" class="admin_btn">Добавить</button>
        <!-- <button v-if="showFacades" class="admin_btn">Изменить</button>
        <button v-if="showFacades" class="admin_btn">Удалить</button> -->
      </div>
      <div class="ventilated_facades_list_description" v-if="openInMain">
        {{ ventilatedFacadesListDescription }}
      </div>
      <h1 class="ventilated-facades-list_examples" v-show="openInMain">Примеры работ</h1>
      <ul class="ventilated-facades-list_items" v-if="openInMain">
        <li class="ventilated-facades-list_item" v-for="(product, index) in products.slice(0, 6)" :key="index">
          <product-card :id="product.id" :title="product.ventilated_facades_title"
            :img-url="product.ventilated_facades_url" :desc="product.ventilated_facades_description"
            :items="product.items" @openSlider="openSlider" />
        </li>
      </ul>
      <ul class="ventilated-facades-list_items" v-else>
        <li class="ventilated-facades-list_item" v-for="(product, index) in products.slice(0, 9)" :key="index">
          <product-card :id="product.id" :title="product.ventilated_facades_title"
            :img-url="product.ventilated_facades_url" :desc="product.ventilated_facades_description"
            :items="product.items" />
        </li>
      </ul>
      <button class="ventilated-facades-list_button" v-if="openInMain"
        @click="() => { $router.push({ name: 'portfolio' }); optionForFilter() }">Посмотреть все работы</button>
    </div>
  </div>
</template>

<script>
import productCard from './productCard.vue';
export default {
  name: "ventilatedFacadesList",
  components: {
    productCard
  },
  props: {
    openInMain: Boolean,
    showFacades: Boolean
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
      ventilatedFacadesListName: "ventilatedFacadesList",
      ventilatedFacadesListTitle: "Вентилируемые фасады",
      ventilatedFacadesListDescription: "Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются.",
      products: [],
      errors: []
    }
  },
  methods: {
    openSlider(id) {
      console.log(`Айди такой: ${id}`)
    },
    optionForFilter() {
      this.$emit('optionForFilter', this.ventilatedFacadesListName)
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
    }
  }
}
</script>


<style>
.ventilated-facades-list_container {
  width: 100%;
  font-size: 1rem;
  margin-top: 30px;
}

.ventilated-facades-list_items {
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


.ventilated-facades-list_title {
  font-style: normal;
  font-weight: 700;
  font-size: 2.5em;
  letter-spacing: -0.03em;


  margin-bottom: 25px;
}

.ventilated_facades_list_description {
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  /* margin-top: 25px; заккоментил чтобы при удалении описания картинки не слипалсь с заголовком, вместо добавил margin-bottom title */
}

.ventilated-facades-list_examples {
  font-style: normal;
  font-weight: 700;
  font-size: 2.5em;
  letter-spacing: -0.03em;

  margin-top: 25px;
  margin-bottom: 2vh;
}

.ventilated-facades-list_button {
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

.ventilated-facades-list_button:hover {
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
  .ventilated-facades-list_container {
    font-size: 0.8rem;
  }
}

@media(max-width:1550px) {
  .ventilated-facades-list_container {
    font-size: 0.7rem;
  }
}

@media(max-width: 1340px) {
  .ventilated-facades-list_container {
    font-size: 0.5rem;
  }

  .ventilated-facades-list_title {
    font-size: 24px;
  }

}

@media(max-width: 800px) {
  .ventilated-facades-list_items {
    grid-template-columns: repeat(2, auto);
  }

}

@media(max-width: 564px) {
  .ventilated-facades-list_button {
    font-size: 16px;
  }
}
</style>
