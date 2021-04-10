<template>
  <tab-bar>
    <tab-bar-item path='/home'>
      <i slot="icon" class="iconfont icon-31shouye"></i>
      <i slot="iconat" class="iconfont icon-31shouyexuanzhong"></i>
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category'>
      <i slot="icon" class="iconfont icon-gengduo"></i>
      <i slot="iconat" class="iconfont icon-gengduofuwu"></i>
      <div slot="text">更多</div>
    </tab-bar-item>
    <tab-bar-item path='/cart' :cart="true">
      <i slot="icon" class="iconfont icon-shiwu-gouwuche"></i>
      <i slot="iconat" class="iconfont icon-20gouwuchefill"></i>
      <div slot="text">购物车</div>   
    </tab-bar-item>
    <tab-bar-item path='/profile'>
      <i slot="icon" class="iconfont icon-wode"></i>
      <i slot="iconat" class="iconfont icon-wode2"></i>
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-Bar>
</template>

<script>
import tabBar from 'components/common/tabbar/Tabbar'
import tabBarItem from 'components/common/tabbar/Tabbaritem'

export default {
  components:{
    tabBar,
    tabBarItem
  }
}
</script>