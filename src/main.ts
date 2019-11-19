import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design' // 引入UI组件库
import 'view-design/dist/styles/iview.css' // 导入样式
import i18n from '@/lang' // 引入国际化
// import './styles/iviewui-variables.less'  // 引入主题色

// 增加对象属性 i18n，效果没差
Vue.use(ViewUI, {
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
