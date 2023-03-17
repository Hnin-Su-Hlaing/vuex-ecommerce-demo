<template>
  <div class="pt-5 mt-5 row">
    <div class="row">
      <div class="col-4">
        <img :src="singleProduct.image" class="w-100" alt="" />
      </div>
      <div class="col-8">
        <h1>{{ singleProduct.title }}</h1>
        <div class="row py-5 w-50">
          <span class="col-4 prd-price">${{ singleProduct.price }}</span>
          <span
            class="badge badge-pill badge-secondary p-2 col-4"
            id="category"
            >{{ singleProduct.category }}</span
          >
        </div>
        <input type="text" class="col-1 p-1 mr-2" v-model.number="quantity" />
        <button class="btn" @click="addToCart(singleProduct)" id="addtocart">
          Add to Cart
        </button>
        <p class="mt-4">{{ singleProduct.description }}</p>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-12">
        <h4 id="main-ttl">Related Products</h4>
      </div>
      <div
        class="col-md-4 mb-2 mt-5"
        v-for="prd in relatedProducts"
        :key="prd.id"
      >
        <div class="card pb-1">
          <div class="card-body p-2">
            <div class="card-img">
              <img
                alt="Vue logo"
                :src="prd.image"
                class="card-img w-100"
                height="250px"
              />
            </div>
            <h5 class="card-title pt-3" @click="view(prd)">
              {{ prd.title.slice(0, 15) }}...
            </h5>
            <div class="pb-3">
              <span class="py-1 pl-0 prd-price">$ {{ prd.price }}</span>
              <span
                class="float-right badge badge-pill py-2 px-2"
                id="category"
              >
                {{ prd.category }}
              </span>
            </div>
            <p class="card-text">{{ prd.description.slice(0, 50) }}...</p>
          </div>
          <span class="btn mx-1 mb-3" @click="addToCart(prd)" id="addtocart"
            >Add To Cart</span
          >
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["id"],

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    ...mapState(["relatedProducts", "singleProduct"]),
  },

  methods: {
    ...mapActions("cart", ["addProductToCart"]),

    addToCart(product) {
      this.addProductToCart({
        product: product,
        quantity: this.quantity,
      });
    },
    view(product) {
      this.$router.push({ name: "single", params: { id: product.id } });
      this.$store.dispatch("listByCategroy", product);
    },
  },
};
</script>

<style>
.card-img {
  max-width: 150px;
  margin: 0 auto;
}
.card-img img {
  width: 100%;
  height: 200px;
}
#main-ttl {
  font-size: 28px;
  color: #363130;
  font-weight: 700;
}
.prd-price {
  color: #363130;
  font-weight: 700;
  font-size: 20px;
}
#category {
  background-color: #363130;
  padding: 9px 14px;
  color: #fff;
}
#addtocart {
  background-color: #f5b56b;
  border-radius: 20px;
  color: #fff;
  font-weight: 600;
  padding: 7px 20px;
}
</style>