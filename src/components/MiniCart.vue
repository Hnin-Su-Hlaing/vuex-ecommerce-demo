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
            <a href="#" class="badge badge-danger" 
              @click.prevent="removeProductFromCart(item.product)">
              remove
            </a>
          </div>
        </div>
        <hr />
      </div>
      <div class="d-flex justify-content-between">
        <span>Total Price: ${{ cartTotalPrice }}</span>
        <button id="viewcart" @click="viewCartItems()" :disabled="cartTotalPrice == 0">View Cart</button>
        <button id="clearbtn" @click.prevent="clearCartItems()" :disabled="cartTotalPrice == 0">Clear Cart</button>
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

    viewCartItems() {
    console.log("view");
      this.$router.push({ name: "allcarts" });
    },
  },

 
};
</script>

<style>
#clearbtn,
#viewcart {
  border: none;
  outline: none;
  background: none;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  font-size: 12px;
}
#clearbtn{
  color: #ff0000;
  border: 1px solid #ff0000;
}
#viewcart {
  color: #37aa22;
  border: 1px solid #37aa22;
}
#clearbtn:hover,
#viewcart:hover {
  opacity: 0.5;
}
</style>