import Product from '../../../api/Product';

export const getProducts = ({ commit }) => {
  Product.all().then(response => {
    commit('SET_PRODUCTS', response.data)
  })
}