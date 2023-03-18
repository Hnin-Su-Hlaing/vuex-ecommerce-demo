<template>
  <div class="col-4 mt-5">
    <div class="card">
      <div class="card-img">
        <img :src="product.image" class="w-100" alt="" />
      </div>
      <div class="card-body">
        <h5 class="card-title" @click="view(product)">
          {{ product.title }}
        </h5>
        <div class="row py-3">
          <span class="col-6 prd-price">${{ product.price }}</span>
          <span class="col-5 float-right badge badge-pill" id="category">
            {{ product.category }}
          </span>
        </div>
        <p class="card-text">{{ product.description }}</p>
      </div>
      <div class="px-4 pb-3">
        <button id="addtocart" class="btn btn-block" @click="addToCart()">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["product"],

  methods: {
    ...mapActions("cart", ["addProductToCart"]),

    view(product) {
      this.$router.push({ name: "single", params: { id: product.id } });
      this.$store.dispatch("listByCategroy", product);
    },

    addToCart() {
      this.addProductToCart({
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style>
.card {
  padding: 22px 25px 6px 25px;
  min-height: 520px;
  box-shadow: 0px 14px 20px 7px #dbd5d5;
  border-radius: 30px;
}
.card-title {
  color: #f5b56b;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;
}
.card-title:hover,
#addtocart:hover {
  opacity: 0.8;
}
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-img {
  max-width: 150px;
  margin: 0 auto;
}
.card-img img {
  width: 100%;
  height: 200px;
}
.prd-price {
  color: #363130;
  font-weight: 700;
  font-size: 20px;
}
#addtocart {
  background-color: #f5b56b;
  border-radius: 20px;
  color: #fff;
  font-weight: 600;
}
#category {
  background-color: #363130;
  padding: 9px 14px;
  color: #fff;
}
</style>