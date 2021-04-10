<template>
  <div class="tab-bar-item" @click="handleclick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="iconat"></slot></div>
    <div :style="activestytle"><slot name="text"></slot></div>
    <div v-if="cart" class="cartListNum">{{this.$store.getters.cartListLength}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:{
    path:{
      type:String,
    },
    activecolor:{
      type:String,
      default:'red'
    },
    cart:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    activestytle(){
      return this.isActive?{color:this.activecolor}:{}
    }
  },
  methods:{
    handleclick(){
      this.$router.push(this.path)
    }
  }
}
</script>
<style>
.tab-bar-item i{
  font-size: 25px;
}
.tab-bar-item div{
  font-size: 10px;
  margin-top: 3px;
}
.cartListNum{
  display: block;
  position: relative;
  bottom: 50px;
  left: 50px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: red;
  color: #fff;
  line-height: 18px;
}
</style>