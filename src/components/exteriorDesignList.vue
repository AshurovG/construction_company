<template>
  <div class="exterior-design-list">
    <div class="exterior-design-list_container">
      <h1 class="exterior-design-list_title">{{ exteriorDesignListTitle }}</h1>
      <div class="exterior-design-list_description" v-if="openInMain">
        {{ exteriorDesignListDescription }}
      </div>
      <h1 class="exterior-design-list_examples" v-if="openInMain">Примеры работ</h1>
      <ul class="exterior-design-list_items" v-if="openInMain">
        <li class="exterior-design-list_item" v-for="(product, index) in products.slice(0, 6)" :key="index">
          <product-card :id="product.exterior_design_id" :title="product.exterior_design_title"
            :img-url="product.exterior_design_url" :desc="product.exterior_design_description" :items="product.items" />
        </li>
      </ul>
      <ul class="exterior-design-list_items" v-else>
        <li class="exterior-design-list_item" v-for="(product, index) in products.slice(0, 9)" :key="index">
          <product-card :id="product.exterioidr_design_id" :title="product.exterior_design_title"
            :img-url="product.exterior_design_url" :desc="product.exterior_design_description" :items="product.items" />
        </li>
      </ul>
      <button class="exterior-design-list_button" v-if="openInMain"
        @click="$router.push({ name: 'portfolio' })">Посмотреть
        все работы</button>
    </div>
  </div>
</template>

<script>
import productCard from './productCard.vue';
export default {
  name: "exteriorDesignList",
  components: {
    productCard
  },
  props: {
    openInMain: Boolean,
  },
  data() {
    return {
      isComponentCreated: false,
      // exteriorDesignListName: "exteriorDesignList",
      exteriorDesignListTitle: "Наружное оформление зданий",
      exteriorDesignListDescription: "Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются.",

      products: [],
      errors: []

      // products: [
      //   {
      //     id: 1,
      //     title: 'Офор. фасад 1',
      //     imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
      //     items: [
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       }
      //     ]
      //   },
      //   {
      //     id: 2,
      //     title: 'Офор. фасад 2',
      //     imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
      //     items: [
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       }
      //     ]

      //   },
      //   {
      //     id: 3,
      //     title: 'Офор. фасад 3',
      //     imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
      //     items: [
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       }
      //     ]
      //   },
      //   {
      //     id: 4,
      //     title: 'Офор. фасад 4',
      //     imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
      //     items: [
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       }
      //     ]
      //   },
      //   {
      //     id: 5,
      //     title: 'Офор. фасад 5',
      //     imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
      //     items: [
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       }
      //     ]
      //   },
      //   {
      //     id: 6,
      //     title: 'Офор. фасад 6',
      //     imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
      //     items: [
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       }
      //     ]
      //   },
      //   {
      //     id: 6,
      //     title: 'Офор. фасад 7',
      //     imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
      //     items: [
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       }
      //     ]
      //   },
      //   {
      //     id: 6,
      //     title: 'Офор. фасад 8',
      //     imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
      //     items: [
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       }
      //     ]
      //   },
      //   {
      //     id: 6,
      //     title: 'Офор. фасад 9',
      //     imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
      //     items: [
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       },
      //       {
      //         subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
      //       }
      //     ]
      //   },
      // ]
    }
  },
  mounted() {
    if (!this.isComponentCreated) {
      this.$emit("blockTitle", this.exteriorDesignListTitle);
      this.isComponentCreated = true
    }
    this.getAllExteriorDeisigns()
  },
  methods: {
    openPortfolioDesigns() {
      this.$emit('openPortfolioDesigns')
    },

    async getAllExteriorDeisigns() {
      try {
        const res = await fetch('http://localhost:8000/api/exteriordesign', {
          method: 'GET',
          mode: 'cors'
        })
        const data = await res.json()
        if (res.status == 200 || res.status == 201) {
          this.products = data;
          for (var i = 0; i < this.products.length; i++) {
            this.products[i].items = []
            this.getExteriorDeisignItemsById(this.products[i].exterior_design_id)
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

    async getExteriorDeisignItemsById(id) {
      try {
        const res = await fetch('http://localhost:8000/api/exteriordesignitems/' + id, {
          method: 'GET',
          mode: 'cors'
        })
        const data = await res.json()
        if (res.status == 200 || res.status == 201) {
          for (let product of this.products) {
            for (let item of data) {
              if (product.exterior_design_id === item.exterior_design_id) {
                product.items.push(item.exterior_design_items_url)
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
.exterior-design-list_items {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  row-gap: 1vw;
  column-gap: 2vw;
  margin-bottom: 2vw;
  /* grid-auto-rows: minmax(10px,auto); */
}


.exterior-design-list_container {
  width: 100%;
  font-size: 1rem;
  margin-top: 30px;
}

.exterior-design-list_title {
  font-style: normal;
  font-weight: 700;
  font-size: 2.5em;
  letter-spacing: -0.03em;

  margin-bottom: 25px;
}

.exterior-design-list_description {
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  /* margin-top: 25px; заккоментил чтобы при удалении описания картинки не слипалсь с заголовком, вместо добавил margin-bottom title */
}

.exterior-design-list_examples {
  font-style: normal;
  font-weight: 700;
  font-size: 2.5em;
  letter-spacing: -0.03em;

  margin-top: 25px;
  margin-bottom: 2vh;
}

.exterior-design-list_button {
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
  color: #FFFFFF;
  text-align: center;
  cursor: pointer;
}

.exterior-design-list_button:hover {
  background: rgba(69, 5, 5, 0.82);
}

@media(max-width:1800px) {
  .exterior-design-list_container {
    font-size: 0.8rem;
  }
}

@media(max-width:1550px) {
  .exterior-design-list_container {
    font-size: 0.7rem;
  }
}

@media(max-width: 1340px) {
  .exterior-design-list_container {
    font-size: 0.5rem;
  }

  .exterior-design-list_title {
    font-size: 24px;
  }

}

@media(max-width: 800px) {
  .exterior-design-list_items {
    grid-template-columns: repeat(2, auto);
  }

}

@media(max-width: 564px) {
  .exterior-design-list_button {
    font-size: 16px;
  }
}
</style>
