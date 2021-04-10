import Toast from './Toast'


//封装弹窗插件，导出的对象经过Vue.use()安装，会调用对象的install方法
const obj = {}

obj.install = function(Vue){
//创建组件构造器
  const toastConstructor = Vue.extend(Toast)
//根据构造器new一个组件对象
  const toast = new toastConstructor()
  //将组件对象，手动挂载到某一元素上
  toast.$mount(document.createElement('div'))
  //toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  //将Toast组件对象添加到Vue的原型上，在多个组件中可以使用this.$toast使用组件中的属性方法
  Vue.prototype.$toast = toast
}


export default obj