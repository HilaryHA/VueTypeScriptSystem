import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from './actions'
import getters from './getters'
import search, { State as SearchState } from './modules/search'
import user, { State as UserState } from './modules/user'
import sider, { State as SiderState } from './modules/sider-bar'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    search,
    user,
    sider
  },
  // 将数据存储于localStorage中，保证刷新数据不消失
  plugins: [createPersistedState()]
})

// 统一模块的state数据
export interface State {
  search: SearchState,
  user: UserState,
  sider: SiderState
}

/**
 * 公用接口类型
 * key 属性关键字
 * value 属性对应的值
 * callback 回调函数（'?'表示可选参数）
 */
export interface SetStateObj {
  key: string,
  value: any,
  callback?: Function
}