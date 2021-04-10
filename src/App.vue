<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import Maintabbar from './components/content/Maintabbar'

export default {
  components:{
    Maintabbar
  }
}
</script>

<style>
@import url('assets/css/base.css');
</style>
