<template>
  <div id="detail">
    <detail-nav class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav>
    <scroll class="detail-scroll" ref="scroll" @scrollPos="getScrollPos" :probeType="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @scrollRefresh="scrollRefresh" />
      <detail-param-info :param-info="paramInfo" ref="params"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommend" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <back-top v-show="isTopBack" @click.native="backTopClick" />
  </div>
</template>

<script>
  import DetailNav from './childcomps/DetailNav'
  import DetailSwiper from './childcomps/DetailSwiper'
  import DetailBaseInfo from './childcomps/DetailBaseInfo'
  import DetailShopInfo from './childcomps/DetailShopInfo'
  import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
  import Scroll from 'components/common/scroll/Scroll'
  import DetailParamInfo from './childcomps/DetailParamInfo'
  import DetailCommentInfo from './childcomps/DetailCommentInfo'
  import GoodsList from 'components/content/goodslist/GoodsList'
  import DetailBottomBar from './childcomps/DetailBottomBar'

  import {backTopMixin} from 'common/mixin'

  import {getDetail,getRecommed,Goods,Shop,GoodsParam} from 'network/detail'
  import {debounce} from 'common/utils'

  export default {
    name:'Detail',
    components:{
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      Scroll,
      DetailBottomBar
    },
    mixins:[
      backTopMixin
    ],
    data(){
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        timer:null,
        paramInfo:{},
        commentInfo:{},
        recommend:[],
        compsTops:[],
        getCompsTop:null,
        currentIndex:0
      }
    },
    created(){
      this.iid = this.$route.params.iid;
      //this.iid = this.$route.query.iid;
      getDetail(this.iid).then((res)=>{
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        this.shop = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
      })


      getRecommed().then(res=>{
        this.recommend = res.data.list
      })

      //防抖函数将获取位置语句包装
      this.getCompsTop = debounce(() => {
        //这里compsTops里面的位置是相对于屏幕顶端
        this.compsTops = [];
        this.compsTops.push(44);
        this.compsTops.push(this.$refs.params.$el.offsetTop)
        this.compsTops.push(this.$refs.comment.$el.offsetTop)
        this.compsTops.push(this.$refs.recommend.$el.offsetTop)
        this.compsTops.push(Number.MAX_VALUE)
      },100)
    },
    mounted(){
    },
    methods:{
      //防抖原理方法将refresh函数包装
      scrollRefresh(){
        if(this.timer){clearTimeout(this.timer)}
        this.timer = setTimeout(() => {
          this.$refs.scroll.refresh();
        }, 50);
        this.getCompsTop()
      },

      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.compsTops[index] + 44,100)
      },

      //这里position相对于scroll顶端（scroll顶端距离屏幕顶端44px）
      getScrollPos(position){
        const positionY = -position.y + 44;
        let length = this.compsTops.length - 1;
        for(let i=0;i<length;i++){
          if(this.currentIndex != i && (positionY >= this.compsTops[i] && positionY < this.compsTops[i + 1])){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = i
          }
        }

        this.isShowTopBack(position)
      },

      //添加订单信息到vuex
      addCart(){
        let product = {};
        product.image = this.topImages[0];
        product.price = this.goods.realPrice;
        product.title = this.goods.title;
        product.iid = this.iid;
        product.desc = this.goods.desc
        this.$store.dispatch('addCart',product).then(res => {
          this.$toast.show(res)
        })
      }
    }
  }
</script>

<style>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-scroll{
    height: calc(100% - 93px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>