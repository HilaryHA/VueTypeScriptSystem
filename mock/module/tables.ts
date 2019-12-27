/**
 * @description [ tables 对应的mock接口文件 ] 
 * @author Hilary
 * @date 2019/11/21
 */

import Mock from 'mockjs'
import { Response, Request } from 'express'
import { TableData } from '../../src/api/types'

const tableList: TableData[] = []
const tableCount = 10;

for (let i = 0; i < tableCount; i++) {
    tableList.push(
        Mock.mock({
            "name|1": [
                Mock.Random.cname(),
                Mock.mock('@cname'),
                Mock.mock('@cname()')
            ],
            "age|10-100": 16,
            "ip|+1": [
                Mock.Random.ip(),
                Mock.mock('@ip'),
                Mock.mock('@ip()')
            ],
            "address|1": [
                Mock.mock(`@city(true)`),
                Mock.mock(`@city(true)`),
                Mock.mock(`@city(true)`)
            ],
            "date|1": [
                Mock.Random.date('yyyy-MM-dd'),
                Mock.Random.date('yyyy-MM-dd'),
                Mock.Random.date('yyyy-MM-dd')
            ]
        })
    )
}

// getTables 对应接口 就是 get 方法 '/tables' 因为'swagger-routes-express'中间件的关系？？
export const getTables = (req: Request, res: Response) => {
    if(tableList.length == 0) {
        // 模拟出错时
        return res.json({
            status: -1,
            info: '数据获取错误，请联系管理员！'
        })
    }

    const { name, page = 1, limit = 20, sort } = req.query

    // 模糊查询
    let mockList = tableList.filter(item => {
        if (name && item.name !== name) {
            return false
        }
        return true
    })

    // 排序
    if (sort === '-1') {
        mockList = mockList.reverse()
    }

    // 分页查询
    const pageList = mockList.filter((_, index) => index < limit * page && index > limit * (page - 1))

    return res.json({
        status: 200,
        data: {
            total: mockList.length,
            items: pageList
        }
    })

}