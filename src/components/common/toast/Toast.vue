<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>

  export default {
    name:'',
    data(){
      return{
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message='默认信息',duration=1500){
        this.message = message;
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false
        }, duration);
      }
    }
  }
</script>

<style>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
  }
  .toast div{
    padding: 6px 10px;
    background-color: rgba(0, 0, 0, .6);
    color: #fff;
  }
</style>