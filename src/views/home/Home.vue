<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :tabControls = "['流行','精品','新款']" class="tabcontrol" @tabCurrent="tabCurrent" ref="tabControl1" v-show="isFixed"/>
    <scroll class="scroll-wrap" ref="scroll" :probeType="3" @scrollPos="scrollPos" :pullUpLoad="true" @pullUpLoad="loadMore">
      <homeswiper :banners="banners" @imageLoaded="swiperImageLoaded"></homeswiper>
      <recommends-view :recommends="recommends"></recommends-view>
      <feature-view></feature-view>
      <tab-control :tabControls = "['流行','精品','新款']" class="tabcontrol" @tabCurrent="tabCurrent" ref="tabControl2"/>
      <goods-list :goods="goods[currentTab].list"></goods-list>        
    </scroll>
    <back-top @click.native="backTopClick" v-show="isTopBack"/>
  </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goodslist/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

import Homeswiper from './childcomps/Homeswiper'
import RecommendsView from './childcomps/RecommendsView'
import FeatureView from './childcomps/FeatureView'

// 引入网络请求模块
import {getHomeMultidata,getHomeGoods} from 'network/home'
//工具模块
import {debounce} from 'common/utils'

export default {
  components:{
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    Homeswiper,
    RecommendsView,
    FeatureView,
  },
  data(){
    return{
      banners:null,
      recommends:null,
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentTab:'pop',
      isTopBack:false,
      tabControlOffsetTop:null,
      isFixed:false,
      saveY:0
    }
  },
  created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('goodsItemLoad',()=>{
      refresh();
    })
  },

  //activated和deactivated在进入当前组件页面和离开当前组件页面时调用（前提是这个组件必须在keep-alive标签内）
  activated(){
    /*
    better-scroll的Bug,轮播图的tramsform和better-scroll的transform冲突,
    需要用saveY记录失活状态位置,激活状态在设置回来,但它的scrollTo方法也有Bug,设置时间参数不为0才能解决，而且后面需要refresh一下
    所以better-scroll框架好多问题（--）
    */
    this.$refs.scroll.scrollTo(0,this.saveY,10);
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
  },
  methods:{

    //事件监听相关函数
    tabCurrent(index){
      switch (index){
        case 0:
          this.currentTab = 'pop'
          break
        case 1:
          this.currentTab = 'new'
          break
        case 2:
          this.currentTab = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index
    },
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    scrollPos(position){
      this.isTopBack = -position.y > 1000;
      this.isFixed = -position.y > this.tabControlOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentTab)
    },
    swiperImageLoaded(){
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    //网络请求相关函数
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
      })
      this.goods[type].page++
      if(this.$refs.scroll){
        this.$refs.scroll.finishPullUp()
      }
    }
  }
}
</script>

<style>
#home{
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
.tabcontrol{
  position: sticky;
  top: 44px;
  z-index: 9;
}
.scroll-wrap{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>

