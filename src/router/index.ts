import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    hidden: true
  },
  {
    path: '/',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // 重定向到指定path路由下
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    components: require('@/views/Login.vue'),
    hidden: true
  },
  {
    path: '/option1',
    name: '表格 一',
    components: require('@/views/Home.vue'),
    meta: {
      type: 'ios-navigate',
      title: 'table_one'
    },
    children: [
      {
        // 一级菜单作为路由，设置'meta'属性'isSiderTitle'为true即可
        name: 'option1-1',
        path: '/option1/first',
        components: require('@/components/NavOne/index.vue'),
        meta: {
          isSiderTitle: true,
          title: 'table_one_option'
        }
      }
    ]
  },
  {
    path: '/option2',
    name: '表格 二',
    components: require('@/views/Home.vue'),
    meta: {
      type: 'ios-search',
      title: 'table_two'
    },
    children: [
      {     
        name: 'option2-1',
        path: '/option2/first',
        components: require('@/components/NavTwo/index.vue'),
        meta: {
          isSiderTitle: true,
          title: 'table_two_option'
        }
      }
    ]
  },
  {
    path: '/option3',
    name: 'Option 3',
    components: require('@/views/Home.vue'),
    meta: {
      type: 'ios-filing',
      title: 'menu3'
    },
    children: [
      {
        // 二级菜单，不设置'meta'属性，并且没有'children'字段
        name: 'option3-1',
        path: '/option3/one',
        components: require('@/components/NavThree/ThrOpt1.vue'),
        meta: {
          title: 'menu3_one'
        }
      },
      {
        name: 'option3-2',
        path: '/option3/two',
        components: require('@/components/NavThree/ThrOpt2.vue'),
        meta: {
          title: 'menu3_two'
        }
      },
      {
        name: 'Submenu',
        path: '/option3/thr',
        components: require('@/components/common/SubOne/index.vue'),
        meta: {
          title: 'menu3_thr'
        },
        // 三级菜单，添加到'children'属性下即可
        children: [
          {
            name: 'option3-3',
            path: '/option3/thr/one',
            components: require('@/components/NavThree/ThrOpt3.vue'),
            meta: {
              title: 'menu3_thr_one'
            }
          },
          {
            name: 'option3-4',
            path: '/option3/thr/two',
            components: require('@/components/NavThree/ThrOpt4.vue'),
            meta: {
              title: 'menu3_thr_two'
            }
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
