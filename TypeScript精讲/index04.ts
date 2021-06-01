/**
 * 函数类型定义接口
 */
interface encrypt {
    (x:number,y:string):string
}
let test:encrypt = function(x:number,y:string):string{
    return x+y
}
console.log(test(1,'jaja'))


