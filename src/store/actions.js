import axios from "axios";

export const addNotification = ({ commit }, notification) => {
  commit('PUSH_NOTIFICATION', notification);
}

export const removeNotification = ({ commit }, notification) => {
  commit('REMOVE_NOTIFICATION', notification);
}

export const listByCategroy = ({ commit, state }, product) => {
  commit('SET_PRODUCT', product);
  axios.get(`https://fakestoreapi.com/products/category/${product.category}`)
    .then(res => {
      commit('SET_RELATED_PRODUCT', res.data);
    state.relatedProducts = res.data.filter(item => {
    return item.id != product.id;
  })
  })
}