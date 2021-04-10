<template>
  <div class="check-button" :class="{checked:checkItem}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props:{
    checkItem:{
      type:Boolean
    }
  }
}
</script>

<style>
  .check-button{
    border-radius: 50%;
    border: 1px solid #aaa;
  }
  .check-button.checked{
    background: red;
    border-color: red;
  }
</style>