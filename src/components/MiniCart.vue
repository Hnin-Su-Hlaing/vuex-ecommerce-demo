<template>
  <div>
    <div
      class="dropdown-menu p-2"
      aria-labelledby="my-dropdown"
      style="min-width: 320px; right: 0; left: auto"
    >
      <div class="cart-detail" v-for="item in carts" :key="item.product.id">
        <div class="d-flex justify-content-between px-2">
          <div>
            <strong>{{ item.product.title }}</strong>
            <br />
            {{ item.quantity }} x ${{ item.product.price }}
          </div>
          <div>
            <a
              href="#"
              class="badge badge-danger"
              @click.prevent="removeProductFromCart(item.product)"
              >remove</a
            >
          </div>
        </div>
        <hr />
      </div>
      <div class="d-flex justify-content-between">
        <span>Total Price: ${{ cartTotalPrice }}</span>
        <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      carts: (state) => state.cart.carts, //state.moduleName.stateName
    }),

    ...mapGetters("cart", ["cartTotalPrice"]),
  },

  methods: {
    ...mapActions("cart", ["removeProductFromCart", "clearCartItems"]),
  },
};
</script>

<style>
</style>