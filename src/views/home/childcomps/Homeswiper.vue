<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  props:{
    banners:{
      type:Array,
      default:[]
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  data(){
    return{
      isload:false
    }
  },
  methods:{
    imageLoad(){
      if(!this.isload){
        this.$emit('imageLoaded')
        this.isload = true
      }
    }
  }
}
</script>