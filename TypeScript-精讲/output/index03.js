"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Log = console.log;
// log = Log
// debugger
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        Log('this.name:', this.name);
    };
    return Animal;
}());
// let a = new Animal('jaj')
// a.sayHi()
/**
 * 类的继承
 */
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        Log('this:', _this, 'this.name:', _this.name);
        return _this;
    }
    return Cat;
}(Animal));
var cat = new Cat('little cat');
/**
 * 静态方法
 */
var Life = /** @class */ (function () {
    function Life() {
    }
    Life.isLife = function (params) {
        return params instanceof Life;
    };
    return Life;
}());
var life = new Life();
// Log(Life.isLife(life))
// Log(Life.isLife(cat))
