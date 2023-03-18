<template>
  <div class="mt-5 pt-5">
    <!--<div v-for="cart in carts" :key="cart.id" class="cart-list">
      <p>{{ cart.product.title }}</p>
      <p>{{  cart.quantity }}</p>
      <p>{{  cart.product.price }}</p>
      <span> ${{ cartTotalPrice }} </span>
      <a href="#" class="badge badge-danger" 
        @click.prevent="removeProductFromCart(cart.product)">
        remove
      </a>
    </div>-->
    <table class="table table-bordered">
      <thead class="thead-dark text-center">
        <tr>
          <th>Item</th>
          <th>Title</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody v-for="cart in carts" :key="cart.id">
        <tr class="text-center">
          <td class="align-middle">
            <img :src="cart.product.image" class="cart-img" alt="" />
          </td>
          <td class="align-middle">{{ cart.product.title }}</td>
          <td class="align-middle">{{ cart.quantity }}</td>
          <td class="align-middle">{{ cart.product.price }}</td>
          <td class="align-middle">
            <a
              href="#"
              class="badge badge-danger"
              @click.prevent="removeProductFromCart(cart.product)"
            >
              remove
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="row float-right w-25 border mr-2">
      <div class="border-right bg-info text-white px-3 py-2 align-middle">
        <p>Total Price</p>
      </div>
      <div class="text-center pl-3 py-2">
        <p>${{ cartTotalPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("cart", ["carts"]),

    ...mapGetters("cart", ["cartTotalPrice"]),
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart"]),
  },
};
</script>

<style>
.cart-img {
  width: 60px;
  height: 60px;
}
p {
  margin-bottom: 0;
  font-weight: 600;
}
</style>