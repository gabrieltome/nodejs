// modules

var module = require(__dirname+'/module/mod1.js');
var me = require(__dirname+'/module/mod2');

module('Gabriel Tomé');

me.myAge('25');
me.myJob('Developer');