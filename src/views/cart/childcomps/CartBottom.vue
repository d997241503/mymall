<template>
  <div class="cart-bottom">
    <div class="check-all">
      <CheckBotton class="check-button" :check-item="isCheckAll" @click.native="checkAllClick"></CheckBotton>
      <span>全选</span>
    </div>
    <div class="total-price">
      总计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      结算({{count}})
    </div>
  </div>
</template>

<script>
  import CheckBotton from 'components/content/checkbutton/CheckButton'
  export default {
    name:'CartBottom',
    components:{
      CheckBotton
    },
    computed:{
      cartList(){
        return this.$store.state.cartList
      },
      totalPrice(){
        return "￥" + this.cartList.filter(item => {return item.checked}).reduce((prevalue,item) => {
          return prevalue + item.count*item.price
        },0).toFixed(2)
      },
      count(){
        return this.cartList.filter(item => {return item.checked}).length
      },
      isCheckAll(){
        if(this.cartList.length === 0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods:{
      checkAllClick(){
        if(this.isCheckAll){
          this.cartList.forEach(item => item.checked = false)
        }else{
          this.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick(){
        if(this.cartList.filter(item => item.checked === true).length === 0){
          this.$toast.show('请选择购买的商品')
        }
      }
    }
  }
</script>

<style>
  .cart-bottom{
    display: flex;
    height: 35px;
    background-color: #eee;
  }
  .check-all{
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  .check-button{
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  .total-price{
    flex: 1;
    line-height: 35px;
    padding-left: 30px;
    color: red;
  }
  .calculate{
    width: 70px;
    background-color: salmon;
    color: #FFF;
    text-align: center;
    line-height: 35px;
  }
</style>