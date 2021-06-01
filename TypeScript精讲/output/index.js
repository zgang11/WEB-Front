"use strict";
/**
 * 数组类型
 */
var log = console.log;
var arr = [2, 32, 2, 3];
console.log('arr:', arr);
var arr1;
arr1 = ['string', 'ja'];
log(arr1);
/**
 * 元祖类型
 */
var arr2 = [undefined, null, 1];
log(arr2);
/**
 * 枚举类型
 */
var flag;
(function (flag) {
    flag["s"] = "\u672A\u652F\u4ED8";
    flag["f"] = "\u652F\u4ED8";
})(flag || (flag = {}));
log(flag.f);
