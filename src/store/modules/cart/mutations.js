export const ADD_TO_CART = (state, { product, quantity }) => {
  
  //add to cart existing product or not 
  let productInCart = state.carts.find(item => {
    return item.product.id === product.id;
  });
 
  //if existing add to cart product, do auto increment in quantity
  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }
  state.carts.push({
    product,
    quantity
  })
}

export const SET_CART = (state, cartItems) => {
  state.carts = cartItems;
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
  state.carts = state.carts.filter(item => {
    return item.product.id != product.id;
  })
}

export const CLEAR_CART_ITEMS = (state) => {
  state.carts = [];
}