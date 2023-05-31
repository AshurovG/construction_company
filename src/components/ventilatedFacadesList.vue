<template>
    <div class="ventilated-facades-list">
      <div class="ventilated-facades-list_container">
        <h1 
        class="ventilated-facades-list_title">{{ ventilatedFacadesListTitle }}</h1>
        <div class="ventilated_facades_list_description">
          {{ ventilatedFacadesListDescription }}
        </div>
        <h1 class="ventilated-facades-list_examples">Примеры работ</h1>
        <ul class="ventilated-facades-list_items">
        <li
        class="ventilated-facades-list_item"
        v-for="(product, index) in products"
        :key="index"
        >
          <product-card
          :title="product.title"
          :img-url="product.imgUrl"
          />
        </li>
      </ul>
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
    data() {
      return {
        ventilatedFacadesListTitle: "Вентилируемы фасады",
        ventilatedFacadesListDescription: "Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются.",
        products: [
          {
            title: 'Вент. фасад 1',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          },
          {
            title: 'Вент. фасад 2',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          },
          {
            title: 'Вент. фасад 3',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          },
          {
            title: 'Вент. фасад 4',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          },
          {
            title: 'Вент. фасад 5',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          },
          {
            title: 'Вент. фасад 6',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          }
        ]
      }
    }
}
</script>


<style>
.ventilated-facades-list_items {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
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

</style>
