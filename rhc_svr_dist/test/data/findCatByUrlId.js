'use strict';

var data = require('../../data');

exports.testSomething = function (test) {

    var result = data.findCatByUrlId('deserowe');

    test.equal(result.label, 'Jabłka deserowe');
    test.done();

};
