'use strict';

var products = require('../data').products;

module.exports = function (req, res, next, query) {

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/javascript',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });

    var result = '(';

    var data = ({
        'success': 1,
        'orderId': 522
    });

    result += JSON.stringify(data);
    result += ')';

    res.end(result);

};
