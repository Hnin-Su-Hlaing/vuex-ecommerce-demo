
export const cartItemCount = (state) => {
  return state.carts.length;
}

export const cartTotalPrice = (state) => {
  let total = 0;


  state.carts.forEach((cart) => {
    total += cart.product.price * cart.quantity;
  });

  return total;
}