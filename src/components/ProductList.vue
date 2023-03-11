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
    ...mapState({
      products: state => state.product.products //state.module-name.state-name
    })

    //...mapState(["products"]),

    //products() {
    //  return this.$store.state.products;
    //}
  },
  mounted() {
    this.getProducts();
    //this.$store.dispatch('getProducts');
  },
  methods: {
    ...mapActions('product', ["getProducts"]), //...mapActions('moduleName', ["actionName01","actionName02"])

    //...mapActions(["getProducts"]), //global namespace
  }
}
</script>

<style>

</style>