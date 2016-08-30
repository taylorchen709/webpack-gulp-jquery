var $ = require('jquery');
var util = require('../common/util');
var Greeter = require('./Greeter')

$(function () {
    var c = util.add(1, 2);
    console.log('1+2=' + c);

    var greeter = new Greeter('world');
    console.log(greeter.greet());
    var greeter2 = new Greeter('world2');
    console.log(greeter2.greet());
})