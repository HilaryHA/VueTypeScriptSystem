/**
 * @description [用户相关数据] 如 用户名、token值
 * @author Hilary
 * @date 2019/11/13
 */

import * as types from '../mutation-types'
import { SetStateObj } from '../index'
import { getLocale } from '@/lang/index'

export interface State {
    // 菜单是否收缩
    isCollapsed: Boolean,
    // 语言
    language: string
}

// state
const initState: State = {
    isCollapsed: false,
    language: getLocale()
}

// mutations
const mutations = {
    // 存储用户对应的数据
    [types.SET_SIDER_BAR_INFO] (state: State, newObj: SetStateObj) {
        if(state.hasOwnProperty(newObj.key)) {
            (state as any)[newObj.key] = newObj.value
            if(Object.keys(newObj).includes('callback')) {
                (newObj['callback'] as Function)(newObj.value)
            }
        }
    },
    // 初始化登录数据
    [types.INIT_SIDER_BAR_STATE] (state: State) {
        state.isCollapsed = false
    }
}

export default {
    state: initState,
    mutations
}