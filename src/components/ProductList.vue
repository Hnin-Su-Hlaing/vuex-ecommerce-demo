<template>
  <div class="pt-5 d-flex justify-content-center flex-wrap">
    <product-card v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>

import ProductCard from './ProductCard';
import { mapState, mapActions } from 'vuex';

export default {

  components: {
    ProductCard
  },

  computed: {

    ...mapState('product', ['products'])

  },

  mounted() {
   this.getProducts();
  },

  methods: {

    ...mapActions('product', ["getProducts"]),

    ...mapActions('cart', ["addProductToCart"]),

  }
}
</script>

<style>

</style>