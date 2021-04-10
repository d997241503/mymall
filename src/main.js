import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//安装弹窗插件
Vue.use(toast)

//解决移动端300毫秒延迟
FastClick.attach(document.body)

//$bus是在Vue的prototype上定义的一个属性,它的值是一个Vue实例，充当事件总线，App主组件下的所有组件实例可以通过this.$bus发出和监听事件
Vue.prototype.$bus = new Vue()

//安装懒加载框架
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/loading.jpg')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
