<template>
  <div class="home-recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.home-recommends{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding: 10px 0 30px;
  border-bottom: 6px solid #eee;
}
.home-recommends .recommends-item{
  flex: 1;
}
.home-recommends .recommends-item img{
  width: 68px;
  height: 68px;
  margin-bottom: 8px;
}
</style>