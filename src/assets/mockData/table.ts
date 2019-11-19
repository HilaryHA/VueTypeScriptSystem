/**
 * @author Hilary
 * @date 2019/11/7
 * @description [获取随机mock数据(6到10个元素的tableData数组)]
 * 参考官网： http://mockjs.com/examples.html#Path
 *           https://github.com/nuysoft/Mock/wiki/Syntax-Specification
 */
const Mock = require('mockjs');

let data = Mock.mock({
    "tableData|6-10": [
        {
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
        }
    ]
})

export default data;