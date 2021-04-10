<template>
  <div ref="wrap">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Scroll from 'better-scroll'

  export default {
    name:'Scroll',
    components:{
      scroll
    },
    props:{
      probeType:{
        type:Number,
        default:1
      },
      pullUpLoad:{
        type:Boolean,
        default:false      
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      this.scroll = new Scroll(this.$refs.wrap,{
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        click:true
      })

      this.scroll.on('scroll',(position)=>{
        this.$emit('scrollPos',position)
      })
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullUpLoad')
        })
      }

    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll && this.scroll.refresh && this.scroll.refresh();
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      }
    }
  }
</script>

<style>
  
</style>