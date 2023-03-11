//import axios from 'axios';
//import Product from '../api/Product';
//import Cart from '../api/Cart';

//export const getProducts = ({ commit }) => {
//  Product.all().then(response => {
//      console.log(response);
//    commit('SET_PRODUCTS', response.data)
//  })
//}
//
//export const getProduct = ({ commit }, productId) => {
// Product.show(productId).then(response => {
//      console.log(response);
//      commit('SET_PRODUCT', response.data)
//  })
//}

//export const addProductToCart = ({ commit }, { product, quantity }) => {
//  commit('ADD_TO_CART', { product, quantity });
//
//  Cart.store({
//    product_id: product.id,
//    quantity
//  });
//  //axios.post('http://127.0.0.1:8000/api/cart', {
//  //  product_id: product.id,
//  //  quantity
//  //})
//}
//
//export const getCartItems = ({ commit }) => {
//  Cart.all().then(response => {
//      commit('SET_CART', response.data);
//  })
//}
//
//export const removeProductFromCart = ({ commit }, product ) => {
//  commit('REMOVE_PRODUCT_FROM_CART', product);
//
//  Cart.delete(product.id);
//  //axios.delete(`http://127.0.0.1:8000/api/cart/${product.id}`);
//}
//
//export const clearCartItems = ({ commit }) => {
//  commit('CLEAR_CART_ITEMS');
//
//  Cart.deleteAll();
//  //axios.delete('http://127.0.0.1:8000/api/cart');
//}

export const addNotification = ({ commit }, notification) => {
  commit('PUSH_NOTIFICATION', notification);
}

export const removeNotification = ({ commit }, notification) => {
  commit('REMOVE_NOTIFICATION', notification);
}