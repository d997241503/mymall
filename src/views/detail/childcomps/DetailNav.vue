<template>
  <nav-bar>
    <div slot="left" class="detail-back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="detail-title">
      <div v-for="(item,index) in title"
      @click="titleClick(index)"
      :class="{active:index === currentIndex}"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name:'',
    components:{
      NavBar
    },
    data(){
      return{
        title:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      titleClick(index){
        this.currentIndex = index;
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style>
.detail-title{
  display: flex;
}
.detail-title div{
  flex: 1;
  font-size: 15px;
}
.detail-title div.active{
  color: var(--color-high-text);
}
.detail-back img{
  margin-top: 12px;
  height: 20px;
  width: 20px;
}
</style>