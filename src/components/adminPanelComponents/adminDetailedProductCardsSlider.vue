<template>
  <div class="admin_carousel">
    <div class="admin_slide" v-for="(item, index) in items" :key="index" :class="{ active: index === currentSlide }">
      <div class="admin_delaited-product-card_item">
        <img class="admin_detailed-product-card_image" :src="item">
        <div class="admin_counter">Фото объекта {{ currentImage }} из {{ items.length }}</div>
      </div>
      <div class="admin_carousel-controls">
        <button @click="prevSlide" class="btn_prev"></button>
        <button @click="nextSlide" class="btn_next"></button>
      </div>

    </div>
    <div class="admin_carousel_description">
      <h2 class="admin_carousel_description_title">Наружное оформление фирмы “ооо ФиРмА”</h2>
      <div class="admin_carousel_description_text">{{ desc }}</div>
    </div>
    <!-- <div class="counter">Фото объекта {{ currentImage }} из {{ items.length }}</div> -->
    <img class="admin_exit_buttton" src="../../images/exit.png" @click="closeSlider">
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
  components: {
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  },
  data() {
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
.admin_carousel {
  width: 80%;
  height: 40vw;
  position: relative;
  overflow: hidden;
  background-color: inherit;
  display: flex;
  overflow: visible;
  z-index: 10000;
  background-color: #fff;
}



.admin_carousel_description {

  position: absolute;
  top: 0;
  right: 0;
  width: 29%;
  font-size: 1rem;
  margin-top: 2em;
  /* margin-left: 15px; */
}

.cadmin_arousel_description_title {
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  line-height: 1.2em;
  text-align: center;
  letter-spacing: -0.02em;

  color: #000000;
}

.admin_carousel_description_text {
  font-style: normal;
  font-weight: 400;
  font-size: 1.375em;
  line-height: 1.2em;
  letter-spacing: -0.02em;

  color: #000000;
}

.admin_counter {
  margin-bottom: 1em;
  position: absolute;
  bottom: 0;
  right: -12vw;

  font-style: normal;
  font-weight: 400;
  font-size: 1.375em;
  line-height: 1.2em;
  letter-spacing: -0.02em;

  color: #000000
}

.admin_slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.admin_slide.active {
  opacity: 1;
}

.admin_slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.admin_carousel_items_container {
  position: relative;
}

.admin_carousel-controls {
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

.admin_btn_next {
  position: relative;
  display: inline-block;
  width: 4vw;
  height: 4vw;
  background-color: #D9D9D9;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 50%;
}

.admin_btn_next::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 2vw;
  height: 2vw;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
}

.admin_btn_next:hover::before {
  border-top-color: #fff;
  border-right-color: #fff;
}

.admin_btn_prev {
  position: relative;
  display: inline-block;
  width: 4vw;
  height: 4vw;
  background-color: #D9D9D9;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 50%;
}

.admin_btn_prev::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 2vw;
  height: 2vw;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
}

.admin_btn_prev:hover::before {
  border-bottom-color: #fff;
  border-left-color: #fff;
}

.admin_carousel-controls button:hover {
  background-color: #333;
  color: #fff;
  transition: background-color .2s;
}

.admin_delaited-product-card_item {
  width: 100%;
  height: 100%;
  position: relative;
}

.admin_exit_buttton {
  width: 5%;
  height: auto;
  position: absolute;
  top: -5%;
  right: -4%;
  cursor: pointer;
}

@media(max-width:1800px) {
  .admin_carousel_description {
    font-size: 0.8rem;
  }
}

@media(max-width:1550px) {
  .admin_carousel_description {
    font-size: 0.7rem;
  }
}

@media(max-width: 1340px) {
  .admin_carousel_description {
    font-size: 0.6rem;
  }

  .admin_counter {
    right: -120px;
  }
}

@media(max-width: 1080px) {
  .admin_carousel_description {
    font-size: 0.5rem;
  }

  .admin_counter {
    right: -110px;
  }
}

@media(max-width: 800px) {
  .admin_carousel_description {
    font-size: 0.4rem;
  }

  .admin_counter {
    font-size: 8px;
    right: -80px;
  }

  .admin_carousel_description_title {
    margin-bottom: 10px;
  }

}

@media(max-width: 480px) {
  .admin_carousel_description {
    font-size: 0.3rem;
    margin-top: 5px;
  }

  .admin_carousel_description_title {
    margin-bottom: 5px;
  }

  .admin_counter {
    font-size: 6px;
    right: -60px;
    bottom: -3px;
  }

}
</style>

