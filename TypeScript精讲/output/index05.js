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
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('wo ke ye zhao dao');
        return 'jajaj';
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        return 'Car';
    };
    return Car;
}());
var test1 = new SecurityDoor();
var Doors = /** @class */ (function () {
    function Doors() {
    }
    Doors.prototype.alert = function () {
        return 'ja';
    };
    Doors.prototype.seeIn = function () {
    };
    Doors.prototype.seeOut = function () {
    };
    return Doors;
}());
/**
 * 接口继承类
 */
var Pinter = /** @class */ (function () {
    function Pinter(x, y) {
        this.x = x;
        this.y = y;
    }
    return Pinter;
}());
var pionter3d = { x: '1', y: 2, z: true };
