<template>
    <div class="product-card">
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
    </div>
</template>

<script>
export default {
    name: "productCard",
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
      openSlider() {
        // console.log(this.id)
        // console.log(this.items)
        // this.$emit('openSlider(this.id)')
        this.$emit('openSlider', this.id)
      }
    }
}
</script>


<style>
.product-card_container {
  height: 360px;
  width: 485px;
}

.product-card_image {
  width: 485px;
  height: 310px;
  margin-bottom: 10px;
}

.product-card_title {
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}
</style>
