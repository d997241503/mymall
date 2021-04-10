<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <scroll class="cart-scroll" ref="scroll">
      <div v-if="cartListLength"><list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></list-item></div>
      <div v-else class="tips">
        <img src="~assets/img/cart/emptyCart.gif" alt="">
        <p>购物车竟然为空</p>
        <button @click="goShopping">去逛逛</button>
      </div>
    </scroll>
    <CartBottom></CartBottom>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import scroll from 'components/common/scroll/Scroll'
  import ListItem from './childcomps/ListItem'
  import CartBottom from './childcomps/CartBottom'

  import {mapGetters} from 'vuex' 

  export default {
    name:'cart',
    components:{
      NavBar,
      scroll,
      ListItem,
      CartBottom
    },
    computed:{
      ...mapGetters(['cartListLength','cartList'])
    },
    activated(){
      this.$refs.scroll.refresh()
    },
    methods:{
      goShopping(){
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }
  .cart-scroll{
    height: calc(100% - 44px - 49px - 35px);
    overflow: hidden;
  }
  .cart .tips{
    position: relative;
    top: 15vh;
    left: 22vw;
  }
  .cart .tips img{
    width: 200px;
  }
  .cart .tips p{
    padding-top: 10px;
    padding-left: 30px;
    font-size: 18px;
    color: #666;
  }
  .cart .tips button{
    outline: none;
    margin: 40px 0 0 60px;
    border: none;
    padding:5px 10px;
    background: var(--color-tint);
    color: #fff;
  }
</style>
