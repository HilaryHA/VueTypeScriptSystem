'use strict';

var faker = require('faker');

module.exports = {
    getUser: getUser
};

/*
  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getUser(req, res) {
    // var data = [
    //     { username: 'WWT', lastName: 'Xin', firstName: '' },
    //     { username: 'LU', lastName: 'Fei', firstName: '' },
    //     { username: 'XIAO', lastName: 'PanZi', firstName: '' }
    // ]
    var data = []
    for (let i = 0; i <= 9; i++) {
        data.push(
            { username: faker.internet.userName(), lastName: faker.name.lastName(), firstName: faker.name.firstName() }
        )
    }
    console.log('====================================');
    console.log("sending result " + data);
    console.log('====================================');
    // this sends back a JSON response which is a single string
    res.json(data);
}