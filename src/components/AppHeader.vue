<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand pr-5">LOGO</a>
      <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="my-nav" class="collapse navbar-collapse">
        <div class="navbar-nav mr-auto">
          <!--<a class="nav-item nav-link active" href="#">Home</a>-->
          <router-link to="/" class="nav-item nav-link active">Home</router-link>
          <a class="nav-item nav-link" href="#">Product</a>
        </div>
        <div class="dropdown">
          <button id="my-dropdown" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{cartItemCount}} Cart</button>
          <div @click="$event.stopPropagation()">
            <mini-cart></mini-cart>
          </div>
        </div>
      </div>
    </div>
    </nav>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import MiniCart from './MiniCart.vue'

export default {
  components: {
    MiniCart
  },
  //computed: mapGetters({
  //  cartItemCount: "cartItemCount",
  //})

  //computed: mapGetters(["cartItemCount"])

  computed: {
    ...mapGetters('cart', ["cartItemCount"]),

    //...mapGetters(["cartItemCount"]),
  }

}
</script>

<style>

</style>