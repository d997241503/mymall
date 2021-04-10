<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
    <div class="main">
      <category-list @changeCate="changeCate"></category-list>
      <scroll class="scroll-wrap">
        <list-items :listItems="goods[currentTab]"></list-items>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CategoryList from './childcomp/CategoryList'
import ListItems from './childcomp/ListItems'
import Scroll from 'components/common/scroll/Scroll'

import {getHomeGoods} from '@/network/home'
export default {
  name:'',
  data(){
    return{
      goods:{
        pop:[],
        new:[],
        sell:[]
      },
      currentTab:'pop'
    }
  },
  components:{
    NavBar,
    CategoryList,
    ListItems,
    Scroll
  },
  created(){
    this.getCateGoods()
  },
  methods:{
    getCateGoods(){
      for(let key in this.goods){
        for(let i = 0; i < 5; i++){
          getHomeGoods(key,i+1).then(res => {
            this.goods[key].push(...res.data.list)
          })
        }
      }
    },
    changeCate(index){
      let result = index % 3;
      switch (result){
        case 0:
          this.currentTab = 'pop'
          break
        case 1:
          this.currentTab = 'new'
          break
        case 2:
          this.currentTab = 'sell'
      }
    }
  }
}
</script>

<style scoped>
#category{
  position: relative;
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
.scroll-wrap{
position: absolute;
width: 70vw;
top: 44px;
left: 30vw;
bottom: 49px;
overflow: hidden;
}
</style>