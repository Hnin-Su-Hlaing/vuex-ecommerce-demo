export const ADD_TO_CART = (state, { product, quantity }) => {

  //add to cart existing product or not 
  let productInCart = state.cart.find(item => {
    return item.product.id === product.id;
  });

  //if existing add to cart product, do auto increment in quantity
  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }

  state.cart.push({
    product,
    quantity
  })
}

export const SET_CART = (state, cartItems) => {
  state.cart = cartItems;
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
  state.cart = state.cart.filter(item => {
    return item.product.id != product.id;
  })
}

export const CLEAR_CART_ITEMS = (state) => {
  state.cart = [];
}