import Product from '../../../api/Product';

export const getProducts = ({ commit }) => {
  Product.all().then(response => {
      console.log("All Products=>", response);
    commit('SET_PRODUCTS', response.data)
  })
}

export const getProduct = ({ commit }, productId) => {
 Product.show(productId).then(response => {
      console.log("Single Product=>", response);
      commit('SET_PRODUCT', response.data)
  })
}