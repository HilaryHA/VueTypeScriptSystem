/**
 * @description [ 表格接口封装 ] 
 * @author Hilary
 * @date 2019/12/27
 */
import request from '@/utils/request'
import { TableData } from './types'

export const defaultTableData: TableData = {
    name: 'wwt',
    age: 16,
    ip: '127.0.0.1',
    address: 'sky the  heaven.',
    date: new Date()
}

/**
 * 获取 swagger server 接口
 * @param params 问号表示可选参数
 */
export const getLists = (params?: any) => 
    request({
        url: '/userLists',
        method: 'get',
        params
    })