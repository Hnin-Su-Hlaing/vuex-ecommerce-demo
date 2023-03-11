<template>
  <div class="col-3 mt-5">
    <div class="card">
      <img :src="product.image" class="w-100" alt="">
      <div class="card-body">
        <h5 class="card-title">
          <!--<a href="#">Product Title</a>-->
          <router-link :to="{name: 'product', params: {id: product.id}}">{{ product.title }}</router-link>
        </h5>
        <strong>${{ product.price }}</strong>
        <p class="card-text">{{ product.description }}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToCart()">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  props: ["product"],
  methods: {

    ...mapActions('cart', ["addProductToCart"]),

    //...mapActions(["addProductToCart"]),

    addToCart() {
    
      this.addProductToCart({
        product: this.product,
        quantity: 1,
      })
      
    }
    //addToCart(){
    //  this.$store.dispatch('addProductToCart', {
    //    product: this.product,
    //    quantity: 1,
    //  })
    //}
  }
}
</script>

<style>

</style>