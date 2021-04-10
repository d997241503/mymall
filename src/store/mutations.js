export default {
  addCount(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    payload.checked = true
    state.cartList.push(payload)
  },
  removeGoods(state,payload){
    state.cartList.splice(payload,1)
  }
}