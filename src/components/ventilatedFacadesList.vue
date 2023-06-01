<template>
    <div class="ventilated-facades-list">
      <div class="ventilated-facades-list_container">
        <h1
        class="ventilated-facades-list_title">{{ ventilatedFacadesListTitle }}</h1>
        <div class="ventilated_facades_list_description">
          {{ ventilatedFacadesListDescription }}
        </div>
        <h1 class="ventilated-facades-list_examples">Примеры работ</h1>
        <ul class="ventilated-facades-list_items" v-if="flag">
          <li
          class="ventilated-facades-list_item"
          v-for="(product, index) in products.slice(0,6)"
          :key="index"
          >
            <product-card
            :id="product.id"
            :title="product.title"
            :img-url="product.imgUrl"
            :items="product.items"
            @openSlider="openSlider"
            />
          </li>
        </ul>
        <ul class="ventilated-facades-list_items" v-else>
          <li
          class="ventilated-facades-list_item"
          v-for="(product, index) in products.slice(0,9)"
          :key="index"
          >
            <product-card
            :id="product.id"
            :title="product.title"
            :img-url="product.imgUrl"
            :items="product.items"
            />
          </li>
        </ul>

        <button
        class="ventilated-facades-list_button"

        >Посмотреть все работы</button>
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
      flag: Boolean
    },
    data() {
      return {
        ventilatedFacadesListTitle: "Вентилируемы фасады",
        ventilatedFacadesListDescription: "Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются.",
        products: [
          {
            id: 1,
            title: 'Вент. фасад 1',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
            items: [
              'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg',
              'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg',
              'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg',
            ]
          },
          {
            id: 2,
            title: 'Вент. фасад 2',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg'
          },
          {
            id: 3,
            title: 'Вент. фасад 3',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg'
          },
          {
            id: 4,
            title: 'Вент. фасад 4',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg'
          },
          {
            id: 5,
            title: 'Вент. фасад 5',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg'
          },
          {
            id: 6,
            title: 'Вент. фасад 6',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg'
          },
          // {
          //   title: 'Вент. фасад 4',
          //   imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg'
          // },
          // {
          //   title: 'Вент. фасад 5',
          //   imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg'
          // },
          // {
          //   title: 'Вент. фасад 6',
          //   imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg'
          // }
        ]
      }
    },
    methods: {
      openSlider(id) {
        console.log(`Айди такой: ${id}`)
      }
    }
}
</script>


<style>

.ventilated-facades-list_container {
  width: 100%;
}

.ventilated-facades-list_items {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 35px;
}

.ventilated-facades-list_title {
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  letter-spacing: -0.03em;

  margin-top: 30px;
}

.ventilated_facades_list_description {
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  margin-top: 25px;
}

.ventilated-facades-list_examples {
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  letter-spacing: -0.03em;

  margin-top: 25px;
  margin-bottom: 20px;
}

.ventilated-facades-list_button {
  display: block;
  width: 454px;
  height: 72px;
  margin: 0 auto;
  margin-bottom: 35px;

  background: rgba(97, 10, 10, 0.82);
  border-radius: 35px;

  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  text-align: center;
}

</style>
