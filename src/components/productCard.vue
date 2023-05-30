<template>
    <div class="product-card">
      <div class="product-card_container">
        <div class="product-card_container_item">
          <img
          class="product-card_image"
          :src="imgUrl"
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
      title: {
        type: String,
        required: true
      },
      imgUrl: {
        type: String,
        required: true
      }
    },
    methods: {
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
  height: 311px;
  margin-bottom: 15px;
}

.product-card_title {
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}
</style>
