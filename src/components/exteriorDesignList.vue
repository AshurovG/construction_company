<template>
    <div class="exterior-design-list">
      <div class="exterior-design-list_container">
        <h1
        class="exterior-design-list_title">{{ exteriorDesignListTitle }}</h1>
        <div class="exterior-design-list_description" v-if="openInMain">
          {{ exteriorDesignListDescription }}
        </div>
        <h1 class="exterior-design-list_examples" v-if="openInMain">Примеры работ</h1>
        <ul class="exterior-design-list_items" v-if="openInMain">
          <li
          class="exterior-design-list_item"
          v-for="(product, index) in products.slice(0,6)"
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
       <ul class="exterior-design-list_items" v-else>
          <li
          class="exterior-design-list_item"
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
      <button class="exterior-design-list_button" v-if="openInMain">Посмотреть все работы</button>
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
        // exteriorDesignListName: "exteriorDesignList",
        exteriorDesignListTitle: "Наружное оформление зданий",
        exteriorDesignListDescription: "Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются. Здесь кратко описано, что это за услуга / где и как используется. Также было бы полезно указать, какие материалы используются.",
        products: [
          {
            id: 1,
            title: 'Офор. фасад 1',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
            items: [
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              }
            ]
          },
          {
            id: 2,
            title: 'Офор. фасад 2',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
            items: [
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              }
            ]

          },
          {
            id: 3,
            title: 'Офор. фасад 3',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
            items: [
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              }
            ]
          },
          {
            id: 4,
            title: 'Офор. фасад 4',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
            items: [
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              }
            ]
          },
          {
            id: 5,
            title: 'Офор. фасад 5',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
            items: [
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              }
            ]
          },
          {
            id: 6,
            title: 'Офор. фасад 6',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
            items: [
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              }
            ]
          },
          {
            id: 6,
            title: 'Офор. фасад 7',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
            items: [
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              }
            ]
          },
          {
            id: 6,
            title: 'Офор. фасад 8',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
            items: [
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              }
            ]
          },
          {
            id: 6,
            title: 'Офор. фасад 9',
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg',
            items: [
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              },
              {
                subImgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
              }
            ]
          },
        ]
      }
    },
    created() {
      this.$emit("blockTitle", this.exteriorDesignListTitle);
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
  margin-bottom: 25px;
}

.exterior-design-list_description {
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  /* margin-top: 25px; заккоментил чтобы при удалении описания картинки не слипалсь с заголовком, вместо добавил margin-bottom title */
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
