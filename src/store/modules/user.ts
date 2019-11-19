/**
 * @description [用户相关数据] 如 用户名、token值
 * @author Hilary
 * @date 2019/11/09
 */

import * as types from '../mutation-types'
import { SetStateObj } from '../index'

export interface State {
    username: string,
    token: any
    // // 菜单是否收缩
    // isCollapsed: Boolean
}

// state
const initState: State = {
    username: '',
    token: null
    // isCollapsed: false
}

// mutations
const mutations = {
    // 存储用户对应的数据
    [types.SET_USER_INFO] (state: State, newObj: SetStateObj) {
        // console.log('---------------user---==========-------')
        // console.log(state.hasOwnProperty(newObj.key))
        if(state.hasOwnProperty(newObj.key)) {
            (state as any)[newObj.key] = newObj.value
        }
    },
    // 初始化登录数据
    [types.INIT_USER_STATE] (state: State) {
        state.username = ''
        state.token = null
    }
}

export default {
    state: initState,
    mutations
}