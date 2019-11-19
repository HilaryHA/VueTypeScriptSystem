/**
 * @description [store.actions] 数据
 * @author Hilary
 * @date 2019/11/09
 */

import { Commit, Action, ActionTree } from 'vuex'
import * as types from './mutation-types'
import { State, SetStateObj } from './index'

/**
 * 设置state的数据
 * @param context 
 * @param newObj 
 */
const setStateData: Action<State, any> = (context: { commit: Commit; state: State }, newObj: SetStateObj) => {
    context.commit(types.SET_STATE_DATA, newObj)
    context.commit(types.SET_USER_INFO, newObj)
    context.commit(types.SET_SIDER_BAR_INFO, newObj)
}

/**
 * 初始化state的数据
 * @param context 
 */
const initStateData: Action<State, any> = (context: { commit: Commit; state: State }) => {
    context.commit(types.INIT_STATE)
    context.commit(types.INIT_USER_STATE)
    context.commit(types.INIT_SIDER_BAR_STATE)
}

const actions: ActionTree<State, any> = {
    setStateData,
    initStateData
}

export default actions