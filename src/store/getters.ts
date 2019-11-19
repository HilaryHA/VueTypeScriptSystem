/**
 * @description [store.getters] 数据
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
    isCollapsed,
    language
}

export default getters