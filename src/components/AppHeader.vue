<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand pr-5">LOGO</a>
        <button
          class="navbar-toggler"
          data-target="#my-nav"
          data-toggle="collapse"
          aria-controls="my-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="my-nav" class="collapse navbar-collapse">
          <div class="navbar-nav mr-auto">
            <router-link to="/" class="nav-item nav-link active"
              >Home</router-link
            >
            <a class="nav-item nav-link" href="#">About</a>
          </div>
          <div class="dropdown">
            <button
              id="my-dropdown"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ cartItemCount }} Cart
            </button>
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
import { mapGetters, mapActions } from "vuex";
import MiniCart from "./MiniCart.vue";

export default {
  components: {
    MiniCart,
  },

  computed: {
    ...mapGetters("cart", ["cartItemCount"]),
  },

  async mounted() {
    await this.getProducts();
  },
  methods: {
    ...mapActions("product", ["getProducts"]),
  },
};
</script>

<style>
.navbar-brand {
  font-size: 28px;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
}
.navbar-brand,
.navbar-brand:hover {
  color: #fff;
}
.navbar {
  background-color: #a18268;
}
.nav-item {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.5px;
}
.nav-item:hover {
  color: #cdcdcd;
}
#my-dropdown {
  border-radius: 9px;
  background-color: #e9e9e9;
  color: #363130;
  box-shadow: 0px 0px 6px #cdcdcd;
}
</style>