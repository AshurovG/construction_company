<template>
<div class="delaited-product-card">
  <div class="delaited-product-card_container">
    <div class="delaited-product-card_item">
      <img
      class="detailed-product-card_image"
      :src="imgUrl"
      >
      <slot></slot>
      </div>
  </div> 
</div>
</template>
    
<script>
export default {
  name:'detailedProductCard',
  props: {
    imgUrl: {
      type: String,
      required: true
    }
  }
}
</script>
    
<style>
.delaited-product-card_item {
  width: 1000x;
  height: 800px;
}
</style>
    
    