<template>
  <div class="list-items">
    <div v-for="(item,index) in listItems" :key="index">
      <img :src="item.img || item.show.img" alt="">
      <span>{{item.orgPrice}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name:'',
  props:['listItems'],
}
</script>

<style scoped>
.list-items{
  display: flex;
  flex-wrap: wrap;
}
.list-items div{
  width: 33%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--color-high-text);
  font-size: 13px;
}
.list-items div img{
  width: 80%;
  border-radius: 50%;
  margin-bottom: 3px;
}
</style>