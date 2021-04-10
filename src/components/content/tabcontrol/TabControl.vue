<template>
  <div class="tab-control">
    <div v-for="(item,index) in tabControls" :key="index" class="tab-control-item" 
    @click="handleClick(index)"
    :class="{active: index===currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    tabControls:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    handleClick(index){
      this.currentIndex = index;
      this.$emit('tabCurrent',index)
    }
  }
}
</script>


<style>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding:5px;
}
.tab-control-item.active span{
  color:var(--color--high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>