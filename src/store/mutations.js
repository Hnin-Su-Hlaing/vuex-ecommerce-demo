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

export const SET_RELATED_PRODUCT = (state, relatedPrd) => {
  state.relatedProducts = relatedPrd;
}

export const SET_PRODUCT = (state, product) => {
  state.singleProduct = product;
}
