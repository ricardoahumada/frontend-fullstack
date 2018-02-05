;require._modules["/foo.js"] = (function() { var __filename = "/foo.js"; var __dirname = "/"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /foo.js  == */ var __module__ = function() { 
 module.exports = function() {
    console.log('foo');
}; 
 }; /* ==  End source for module /foo.js  == */ return module; }());;