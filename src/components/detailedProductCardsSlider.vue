<template>
    <div class="carousel">
      <div class="carousel_container">
        <div class="slide" v-for="(product, index) in products" :key="index" :class="{ active: index === currentSlide }">
          <detailed-product-card
          :img-url="product.imgUrl"
          >
            <div class="carousel-controls">
              <button @click="prevSlide" class="btn_prev"></button>
              <button @click="nextSlide" class="btn_next"></button>
            </div>
          </detailed-product-card>
        </div>
        <div class="carousel_description">
          <h2 class="carousel_description_title">Наружное оформление фирмы “ооо ФиРмА”</h2>
          <div class="carousel_description_text">Описание, длинное, что за место, что сделано, где находится и так далее. В общем, вся-вся информация об этой работе</div>
          Фото объекта 2 из 12
        </div>
      </div>
    </div>
</template>
    
<script>
import detailedProductCard from './detailedProductCard.vue';
    export default {
        name:'QuestionCard',
        components: {
          detailedProductCard
        },
        data(){
          return {
          products: [
          {
            imgUrl: 'https://northcliffe.ru/wp-content/uploads/0/9/9/099d38211fb85a0169e58d2737ba502b.jpeg'
          },
          {
            imgUrl: 'https://dekot21.ru/wp-content/uploads/9/8/3/983bcc84a5d7cf71605828ef9646bb40.jpeg'
          },
          {
            imgUrl: 'https://pro-dachnikov.com/uploads/posts/2023-01/1673054977_pro-dachnikov-com-p-krasivii-dvukhetazhnii-dom-foto-89.jpg'
          },
          {
            imgUrl: 'https://pro-dachnikov.com/uploads/posts/2021-10/1633701580_149-p-dom-moei-mechti-kartinki-foto-160.jpg'
          },
          {
            imgUrl: 'https://pro-dachnikov.com/uploads/posts/2021-10/1633835923_16-p-krasivii-fasad-doma-s-mansardoi-foto-17.jpg'
          },
          {
            imgUrl: 'https://pro-dachnikov.com/uploads/posts/2021-09/1632873627_22-p-chastnii-dom-v-sovremennom-stile-foto-22.jpg'
          }
        ],
          currentSlide: 0
          }
        
        },
    methods: {
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.products.length) % this.products.length;
      },
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.products.length;
      }
    }
    }
</script>
    
<style>

.carousel {
  width: 1550px;
  height: 800px;
  position: relative;
  overflow: hidden;
  background-color: inherit;
}

.carousel_container {
  display: flex;
  flex-direction: row;
}

.slide {
  flex: 0 0 auto;
}

.carousel_description {
  flex: 1 1 auto;
}

.carousel_description {
  width: 500px;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 1000px;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel_items_container {
  position: relative;
}

.carousel-controls {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* .carousel-controls button {
  padding: 10px 20px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
} */

.btn_next{
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  background-color: #D9D9D9;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 50%;
}

.btn_next::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 40px;
  height: 40px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
}

.btn_next:hover::before {
  border-top-color: #fff;
  border-right-color: #fff;
}

.btn_prev{
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  background-color: #D9D9D9;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 50%;
}

.btn_prev::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 40px;
  height: 40px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
}

.btn_prev:hover::before {
  border-bottom-color: #fff;
  border-left-color: #fff;
}

.carousel-controls button:hover {
  background-color: #333;
  color: #fff;
  transition: background-color .2s;
}
    
</style>
    
    