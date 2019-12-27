'use strict';

var faker = require('faker');
// 设置语言
faker.locale = 'zh_CN'

module.exports = {
    getTable: getTable
}

function getTable(req: any, res: any) {
    let name = req.swagger.params.user.value || ''
    var da = []
    let len = Math.floor(Math.random() * 10 + 1)
    for(let i = 0; i <= len; i++) {
       da.push(
           { 
               name: faker.internet.userName(),
               age: faker.random.number(),
               ip: faker.internet.ip(),
               address: faker.address.city(),
               date: faker.date.past().toLocaleString()
            }
       ) 
    }

    let userList = da.filter(item => {
        // 只处理了用户名，没有处理开始日期和结束日期
        if(name && item.name !== name) {
            return false
        }
        return true
    })

    res.json({ status: 200, data: {items: userList} })
}