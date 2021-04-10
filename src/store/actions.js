// import { resolve, reject } from "core-js/fn/promise"

export default {

  /**
   * content = {state,commit}
   */
  addCart(content,payload){
    return new Promise((resolve,reject) => {
      let oldproduct = content.state.cartList.find(item => {
        return item.iid === payload.iid
      })
  
      if(oldproduct){
        content.commit('addCount',oldproduct)
        resolve('商品数量+1')
      }else{
        payload.count = 1 ;
        content.commit('addToCart',payload)
        resolve('添加成功')
      }
    })
  },

  removeCart(content,payload){
    return new Promise((resolve,reject) => {
      let goodIndex;
      for(let index in content.state.cartList){
        if(content.state.cartList[index].iid === payload){
          goodIndex = index;
          break
        }
      }
      content.commit('removeGoods',goodIndex)
      resolve('删除成功')
    })
  }
}