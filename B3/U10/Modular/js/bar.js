;require._modules["/bar.js"] = (function() { var __filename = "/bar.js"; var __dirname = "/"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /bar.js  == */ var __module__ = function() { 
 var foo = require('foo');

exports.doTheThing = function() {
    foo();
}; 
 }; /* ==  End source for module /bar.js  == */ return module; }());;