/**
 * @description [store.getters] 再此导出 getters
 *              才能通过 @Getter 和 store.getters获取到 Vuex 数据
 * @author Hilary
 * @date 2019/11/09
 */

import { GetterTree, Getter } from 'vuex'
import { State } from './index'

// search
const date: Getter<State, any> = (state: State) => {
    return state.search.date
}

const name: Getter<State, any> = (state: State) => {
    return state.search.name
}

// user
const username: Getter<State, any> = (state: State) => {
    return state.user.username
}

const token: Getter<State, any> = (state: State) => {
    return state.user.token
}

// sider-bar
const isCollapsed: Getter<State, any> = (state: State) => {
    return state.sider.isCollapsed
}

const language: Getter<State, any> = (state: State) => {
    return state.sider.language
}

const getters: GetterTree<State, any> = {
    date,
    name,
    username,
    token,
    isCollapsed,
    language
}

export default getters