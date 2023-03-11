<template>
  <div class="pt-5 mt-5 row" v-if="product">
    <!--<p>Product {{ id }}</p>-->
    <div class="col-4">
      <img :src="product.image" class="w-100" alt="">
    </div>
    <div class="col-8">
      <h1>{{ product.title }}</h1>
      <h3>${{ product.price }}</h3>
      <input type="text" class="col-1 p-1 mr-2" v-model.number="quantity">
      <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>
      <p class="mt-4">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  props: ["id"],
  data() {
    return {
      quantity: 1
    }
  },
  computed: {

    //first way
    ...mapState('product', ['product']) //...mapState('moduleName','stateName')

    //second way
    //...mapState({
    //  product: state => state.product.product
    //})

    //...mapState(["product"])

    //product() {
    //  return this.$store.state.product;
    //}
  },
  mounted() {
    this.getProduct(this.id)
    //this.$store.dispatch("getProduct", this.id); //for single product page
  },
  methods: {

    ...mapActions('product', ["getProduct"]), //using namespace
    ...mapActions('cart', ["addProductToCart"]), //using namespace

    //...mapActions(["getProduct", "addProductToCart"]),

    addToCart() {
      this.addProductToCart({
        product: this.product,
        quantity: this.quantity,
        //quantity: 1,
      })
    }
    //addToCart() {
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