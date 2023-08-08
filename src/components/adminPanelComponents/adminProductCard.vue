<template>
  <div class="admin_product-card" @click="onProductCardClick" :id="id">
    <div class="admin_product-card_container">
      <div class="admin_product-card_container_item">
        <img class="admin_product-card_image" :src="imgUrl" @click="openSlider">
      </div>
      <div class="admin_product-card_container_item product-card_title">
        {{ title }}
      </div>
    </div>
    <!-- <transition name="showSlider">
      <detailed-product-cards-slider class="slider" v-if="isSliderOpened" :items="items" :desc="desc"
        @closeSlider="closeSlider" />
    </transition> -->
  </div>
</template>

<script>


export default {
  name: "productCard",
  components: {
  },
  data() {
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
    desc: {
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
      this.$emit('onProductCardClick', this.id, this.title, this.imgUrl, this.desc, this.items)
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
.admin_product-card_container {
  font-size: 1rem;
  height: auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-out;
}

.admin_product-card_container:hover {
  transform: scale(1.1);
}

.admin_product-card_image {
  width: 100%;
  height: auto;
  /* margin-bottom: 10px; */
  cursor: pointer;
}

.admin_product-card_title {
  font-style: normal;
  font-weight: 200;
  font-size: 1.25em;
  line-height: 23px;
  color: #000000;
}

/* .admin_slider {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
} */

/* .showSlider-enter-active,
.showSlider-leave-active {
  transition: opacity .2s linear;
}

.showSlider-enter-from,
.showSlider-leave-to {
  opacity: 0;
} */

@media(max-width: 1340px) {
  .admin_product-card_title {
    font-size: 0.8rem;
  }

}
</style>
