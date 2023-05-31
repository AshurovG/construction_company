<template>
    <div class="exterior-design-list">
      <div class="exterior-design-list_container">
        <h1 
        class="exterior-design-list_title">{{ exteriorDesignListTitle }}</h1>
        <div class="exterior-design-list_description">
          {{ exteriorDesignListDescription }}
        </div>
        <h1 class="exterior-design-list_examples">Примеры работ</h1>
        <ul class="exterior-design-list_items">
        <li
        class="exterior-design-list_item"
        v-for="(product, index) in products"
        :key="index"
        >
          <product-card
          :title="product.title"
          :img-url="product.imgUrl"
          />
        </li>
      </ul>
      <button 
        class="exterior-design-list_button"
        
        >Посмотреть все работы</button>
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
    data() {
      return {
        exteriorDesignListTitle: "Наружное оформление зданий",
        exteriorDesignListDescription: "Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются.",
        products: [
          {
            title: 'Наружное оформление 1',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          },
          {
            title: 'Наружное оформление 2',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          },
          {
            title: 'Наружное оформление 3',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          },
          {
            title: 'Наружное оформление 4',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          },
          {
            title: 'Наружное оформление 5',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          },
          {
            title: 'Наружное оформление 6',
            imgUrl: 'http://almode.ru/uploads/posts/2021-07/1625467885_37-almode_ru-p-krasivii-dvukhetazhnii-dom-37.jpg'
          }
        ]
      }
    }
}
</script>


<style>
.exterior-design-list_items {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 35px;
}

.exterior-design-list_title {
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  letter-spacing: -0.03em;

  margin-top: 30px;
}

.exterior-design-list_description {
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  margin-top: 25px;
}

.exterior-design-list_examples {
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  letter-spacing: -0.03em;

  margin-top: 25px;
  margin-bottom: 20px;
}

.exterior-design-list_button {
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
