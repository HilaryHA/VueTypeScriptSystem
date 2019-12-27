'use strict';

var faker = require('faker');
// 设置语言
faker.locale = 'zh_CN'

module.exports = {
    getTable: getTable
}

function getTable(req, res) {
    var data = []
    let len = Math.floor(Math.random() * 10 + 1)
    for(let i = 0; i <= len; i++) {
       data.push(
           { 
               name: faker.internet.userName(),
               age: faker.random.number(),
               ip: faker.internet.ip(),
               address: faker.address.city(),
               date: faker.date.past().toLocaleString()
            }
       ) 
    }
    console.log('====================================');
    console.log("getTable -- result " + data);
    console.log('====================================');
    res.json(data)
}