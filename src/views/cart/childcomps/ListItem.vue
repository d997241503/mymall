<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :checkItem="itemInfo.checked" @click.native="checkClick"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}
          <button class="removeGoods" @click="removeGoods(itemInfo.iid)">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkbutton/CheckButton'

  export default {
    name:'',
    props: {
      itemInfo: Object
    },
    components:{
      CheckButton
    },
    methods:{
      checkClick(){
        this.itemInfo.checked = !this.itemInfo.checked
      },
      removeGoods(iid){
        this.$store.dispatch('removeCart',iid).then(res => {
          this.$toast.show(res)
        })
      }
    }
  }
</script>

<style>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .removeGoods{
    position: relative;
    top: -1px;
    left: 5px;
    box-sizing: border-box;
    outline: none;
    border: none;
    background-color: #fff;
    border: 1px solid var(--color-tint);
    color: var(--color-tint);
    border-radius: 3px;
    font-size: 12px;
    width: 33px;
    height: 20px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>