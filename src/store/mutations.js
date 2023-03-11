//export const SET_PRODUCTS = (state, productsData) => {
//  state.products = productsData;
//}
//
//export const SET_PRODUCT = (state, product) => {
//  state.product = product;
//}

//export const ADD_TO_CART = (state, { product, quantity }) => {
//
//  //add to cart existing product or not
//  let productInCart = state.cart.find(item => {
//    return item.product.id === product.id;
//  });
//
//  //if existing add to cart product, do auto increment in quantity
//  if (productInCart) {
//    productInCart.quantity += quantity;
//    return;
//  }
//
//  state.cart.push({
//    product,
//    quantity
//  })
//}
//
//export const SET_CART = (state, cartItems) => {
//  state.cart = cartItems;
//}
//
//export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
//  state.cart = state.cart.filter(item => {
//    return item.product.id != product.id;
//  })
//}
//
//export const CLEAR_CART_ITEMS = (state) => {
//  state.cart = [];
//}


export const PUSH_NOTIFICATION = (state, notification) => {

  //unique id
  //{
  //  type: 'error',
  //  message: 'notification message'
  //}
  
  state.notifications.push({
    ...notification,
    id: (Math.random().toString(36) + Date.now().toString(36)).substring(2)
  })
}

export const REMOVE_NOTIFICATION = (state, removeToNoti) => {
  state.notifications = state.notifications.filter(noti => {
    return noti.id != removeToNoti.id;
  })
}