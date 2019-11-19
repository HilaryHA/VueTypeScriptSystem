/**
 * @description [搜索模块] 数据表头部搜索需要的相关数据（日期、用户名等）
 * @author Hilary
 * @date 2019/11/09
 */

// import { Commit } from 'vuex'
import * as types from '../mutation-types'

// 定义接口 -- state对应的数据
export interface State {
    date: Date[],
    name: string
}

// 定义接口 -- 修改state的数据格式
export interface SetNewSearchState {
    key: string,
    value: any
}

// 原state数据，初始化state数据
const initState: State = {
    date: [ new Date(Date.now() - 1000 * 3600 * 24 * 6), new Date()],
    name: '凯'
}

// // 原getters
// const getters = {
//     date: (state: State) => state.date,
//     name: (state: State) => state.name
// }

// 原mutations
const mutations = {
    [types.SET_STATE_DATA] (state: State, newObj: SetNewSearchState) {
        // console.log('---------------search----------')
        // console.log(state.hasOwnProperty(newObj.key))
        // 修改存在的state的属性值
        if(state.hasOwnProperty(newObj.key)) {
            (state as any)[newObj.key] = newObj.value
        }
    },
    // 初始化搜索数据
    [types.INIT_STATE] (state: State) {
        state.date = [ new Date(Date.now() - 1000 * 3600 * 24 * 6), new Date()]
        state.name =  '易凯源'
    }
}

// // 原actions
// const actions = {
//     setStateData(context: {commit: Commit; state: State}, newObj: SetNewSearchState) {
//         console.log('===============setStateData=====================');
//         console.log(context.state);
//         console.log('====================================');
//         context.commit(types.SET_STATE_DATA, newObj)
//     }
// }

export default {
    state: initState,
    // getters,
    mutations
    // actions
}