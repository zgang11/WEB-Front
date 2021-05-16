/**
 * 数组类型
 */
let {log} = console
let arr:number[] = [2,32,2,3]
console.log('arr:',arr)

let arr1:Array<string> 
arr1 = ['string','ja']
log(arr1)

/**
 * 元祖类型
 */
let arr2:[undefined,null,number] = [undefined,null,1]
log(arr2)

/**
 * 枚举类型
 */
 enum flag {s='未支付',f="支付"}
 log(flag.f)