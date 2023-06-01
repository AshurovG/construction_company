<template>
  <transition name="showLockinScreen">
    <div class="locking_screen" v-if="isScreenLocked" @click="closeSlider"></div>
  </transition>
    <div class="product-card" @click="onProductCardClick" :id="id">
      <div class="product-card_container">
        <div class="product-card_container_item">
          <img
          class="product-card_image"
          :src="imgUrl"
          @click="openSlider"
          >
        </div>
        <div class="product-card_container_item product-card_title">
          {{ title }}
        </div>
      </div>
      <transition name="showSlider">
        <detailed-product-cards-slider
        class="slider"
        v-if="isSliderOpened"
        :items="items"
        @closeSlider="closeSlider"
        />
      </transition>
    </div>
</template>

<script>
import detailedProductCardsSlider from './detailedProductCardsSlider.vue';
export default {
    name: "productCard",
    components: {
      detailedProductCardsSlider
    },
    data () {
      return {
        isSliderOpened: false,
        isScreenLocked: false
      }
    },
    props: {
      id: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      imgUrl: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    },
    methods: {
      onProductCardClick() { 
        console.log(this.items)
      },
      openSlider() {
        this.isSliderOpened = true,
        this.isScreenLocked = true
      },
      closeSlider() {
        this.isSliderOpened = false,
        this.isScreenLocked = false
      }
    }
}
</script>


<style>

.product-card_container {
  height: 360px;
  width: 485px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-out;
}

.product-card_container:hover{
  transform: scale(1.1);
}

.product-card_image {
  width: 485px;
  height: 310px;
  margin-bottom: 10px;
  cursor: pointer;
}

.product-card_title {
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}

.slider {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}

.showSlider-enter-active,
.showSlider-leave-active {
  transition: opacity .2s linear;
}

.showSlider-enter-from,
.showSlider-leave-to {
  opacity: 0;
}
</style>
