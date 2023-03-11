import Cart from '../../../api/Cart';

export const addProductToCart = ({ commit, dispatch }, { product, quantity }) => {
  
  commit('ADD_TO_CART', { product, quantity });
 

  dispatch('addNotification', {
    type: 'success',
    message: 'Product add to cart.'
  }, { root: true })
  
  Cart.store({
    product_id: product.id,
    quantity
  });
  //axios.post('http://127.0.0.1:8000/api/cart', {
  //  product_id: product.id,
  //  quantity
  //})
}

export const getCartItems = ({ commit }) => {
  Cart.all().then(response => {
      commit('SET_CART', response.data);
  })
}


export const removeProductFromCart = ({ commit, dispatch }, product ) => {
  commit('REMOVE_PRODUCT_FROM_CART', product);

  dispatch('addNotification', {
    type: 'success',
    message: 'Product remove from cart.'
  }, { root: true })

  Cart.delete(product.id);
  //axios.delete(`http://127.0.0.1:8000/api/cart/${product.id}`);
}

export const clearCartItems = ({ commit,dispatch }) => {
  commit('CLEAR_CART_ITEMS');

  dispatch('addNotification', {
    type: 'success',
    message: 'All product remove from cart.'
  }, { root: true })

  Cart.deleteAll();
  //axios.delete('http://127.0.0.1:8000/api/cart');
}