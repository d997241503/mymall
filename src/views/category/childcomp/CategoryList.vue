<template>
  <div class="category-list">
    <ul>
      <li v-for="(item,index) in categoryList" :key="index" :class="{active:currentIndex == index}" @click="handleClick(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name:'',
  data(){
    return{
      categoryList:['裙子','裤子','男装','女装','美妆','内衣','男鞋','女鞋','包包','母婴','家居'],
      currentIndex:0
    }
  },
  methods:{
    handleClick(index){
      this.currentIndex = index;
      this.$emit('changeCate',index)
    }
  }
}
</script>

<style scoped>
.category-list{
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 30vw;
  background-color: #f7f7f7;
}
.category-list li{
  padding: 10px 20px;
}
.category-list li.active{
  position: relative;
  background-color: #fff;
  font-weight: 600;
  color: var(--color-tint);
}
.category-list li.active::before{
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 15px;
  background-color: var(--color-tint);
}
</style>