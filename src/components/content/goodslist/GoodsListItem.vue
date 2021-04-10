<template>
  <div class="goods-list-item">
    <img v-lazy="showImage" @load="goodsItemLoad" @click="itemClick">
    <div class="info">
      <p>{{listItem.title}}</p>
      <span class="price">￥{{listItem.price}}</span>
      <span class="collect">{{listItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    listItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    goodsItemLoad(){
      if(this.$route.path.indexOf('/home') >= 0){
        this.$bus.$emit('goodsItemLoad');
      }
    },
    itemClick(){
      this.$router.push('/detail/' + this.listItem.iid)
      /*
      this.$router.push({
        url:'/detail',
        params:{
          iid:this.listItem.iid
        }
      })
      */
    }
  },
  computed:{
    showImage(){
      return this.listItem.image || this.listItem.show.img
    }
  }
}
</script>

<style>
.goods-list-item{
  width: 48%;
  font-size: 14px;
  text-align: center;
  position: relative;
  padding-bottom: 40px;
}
.goods-list-item img{
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.goods-list-item p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-list-item .info{
  position: absolute;
  bottom: 3px;
  width: 100%;
}
.goods-list-item .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-list-item .collect{
  position: relative;
}
.goods-list-item .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px no-repeat;
}
</style>