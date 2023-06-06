<template>
    <div class="carousel">
        <div class="slide" v-for="(product, index) in items" :key="index" :class="{ active: index === currentSlide }">
          <div class="delaited-product-card_item">
            <img
            class="detailed-product-card_image"
            :src="product.subImgUrl"
            >
          </div>
            <div class="carousel-controls">
              <button @click="prevSlide" class="btn_prev"></button>
              <button @click="nextSlide" class="btn_next"></button>
            </div>
        </div>
        <div class="carousel_description">
          <h2 class="carousel_description_title">Наружное оформление фирмы “ооо ФиРмА”</h2>
          <div class="carousel_description_text">Описание, длинное, что за место, что сделано, где находится и так далее. В общем, вся-вся информация об этой работе</div>
        </div>
        <div class="counter">Фото объекта {{ currentImage }} из {{ items.length }}</div>
        <img
        class="exit_buttton"
        src="../images/exit.png"
        @click="closeSlider"
        >
    </div>
</template>
    
<script>
    export default {
        name:'QuestionCard',
        components: {
        },
        props: {
          items: {
            type: Array,
            required: true
          }
        },
        data(){
          return {
          currentImage: 1,
          currentSlide: 0
          }
        
        },
    methods: {
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
        if (this.currentImage === 1) {
          this.currentImage = this.items.length
        } else {
          this.currentImage--
        }
      },
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        if (this.currentImage === this.items.length) {
          this.currentImage = 1;
        } else {
          this.currentImage++
        }
      },
      closeSlider() {
        this.$emit('closeSlider')
      }
    }
    }
</script>
    
<style>

.carousel {
  width: 1450px;
  height: 800px;
  position: relative;
  overflow: hidden;
  background-color: inherit;
  display: flex;
  overflow: visible;
  z-index: 10000;
  background-color: #fff;
}



.carousel_description {
  margin-top: 25px;
  position: absolute;
  top: 0;
  right: 30px;
  width: 400px;
}

.carousel_description_title {
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #000000;
}

.carousel_description_text {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.02em;

  color: #000000;
}
.counter {
  margin-bottom: 30px;
  position: absolute;
  bottom: 0;
  left: 1050px;

  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: -0.03em;

  color: #000000
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

.delaited-product-card_item {
  width: 1000x;
  height: 800px;
}

.exit_buttton {
  width: 70px;
  height: 70px;
  position: absolute;
  top: -30px;
  right: -50px;
  cursor: pointer;
}
    
</style>
    
    