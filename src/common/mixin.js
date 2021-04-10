import backTop from 'components/content/backtop/BackTop'

export const backTopMixin = {
  components:{
    backTop
  },
  data(){
    return {
      isTopBack:false,
    }
  },
  methods:{
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    isShowTopBack(position){
      this.isTopBack = -position.y > 1000;
    }
  }
}