<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>


<style>
@import url('//at.alicdn.com/t/font_1855236_ioiz1grdb9.css');
#tab-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px #f5f5f5;
  background-color: #f9f9f9;
  display: flex;
  height: 49px;
}
#tab-bar .tab-bar-item{
  flex: 1;
  text-align: center;
}

</style>