<template>
    <div id="list">
      <div v-for="(item, index) in listData" :key="index" class="item">
        <div :class="'iconfont '+item.icon"></div>
        <div class="info">{{item.info}}</div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "ListView",
    props: {
		  listData: {
		    type: Array,
        default: function () {
          return []
        }
      }
    }
	}
</script>

<style scoped>
  #list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }

  #list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
    display: flex;
  }

  #list .item .iconfont{
    font-size: 24px;
    margin-left: 10px;
  }

  .item .info {
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    flex: 1;
    padding-left: 30px;
  }

  
  .icon-0{
    width: 35px;
    height: 35px;
  }
</style>
