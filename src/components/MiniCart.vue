<template>
  <div>
    <div class="dropdown-menu p-2" aria-labelledby="my-dropdown" style="min-width:320px;right:0;left: auto;">
      <div class="cart-detail" v-for="item in cart" :key="item.product.id">
        <div class="d-flex justify-content-between px-2">
          <div>
            <strong>{{ item.product.title }}</strong>
            <br> {{ item.quantity }} x ${{ item.product.price }}
          </div>
          <div>
            <a href="#" class="badge badge-danger" @click.prevent="removeProductFromCart(item.product)">remove</a>
          </div>
        </div>
        <hr>
      </div>
      <div class="d-flex justify-content-between">
        <span>Total Price: ${{ cartTotalPrice }}</span>
        <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  computed: {

    ...mapState({
      cart: state => state.cart.cart //state.moduleName.stateName
    }),

    //...mapState(["cart"]),

    //cart() {
    //  return this.$store.state.cart;
    //},//same name with computed name and actions name

    //...mapGetters(["cartTotalPrice"]) //global namespace -> no need to specifie module name
    
    ...mapGetters('cart', ["cartTotalPrice"]), //namespaced: true


    //cartTotalPrice() {
    //  return this.$store.getters.cartTotalPrice;
    //}
  },
  mounted() {
    this.getCartItems();
    //return this.$store.dispatch('getCartItems');
  },
  methods: {

    ...mapActions('cart', ["removeProductFromCart", "clearCartItems", "getCartItems"]), //namespaced: true

    //...mapActions(["removeProductFromCart", "clearCartItems", "getCartItems"]), //global namespace -> no need to specifie module name
   
    //removeProductFromCart(product) {
    //  return this.$store.dispatch('removeProductFromCart', product);
    //},
    //clearCartItems() {
    //  this.$store.dispatch('clearCartItems')
    //}
  }
}
</script>

<style>

</style>