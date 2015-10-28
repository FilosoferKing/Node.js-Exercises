'use strict';

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    EventEmitter.call(this);
    this.greeting = "Hello World!";
};

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
};

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log('Someone greeted: ' + data);
});

greeter1.greet('Trevor');






//var person = {
//    firstname: '',
//    lastname: '',
//    greet: function(){
//        return this.firstname + ' ' + this.lastname;
//    }
//};
//
//var john = Object.create(person);
//john.firstname = 'John';
//john.lastname = 'Doe';
//
//var jane = Object.create(person);
//jane.firstname = 'Jane';
//jane.lastname = 'Doe';
//
//console.log(john.greet());
//console.log(jane.greet());