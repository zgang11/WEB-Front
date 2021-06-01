/**
 * 函数定义
 */
function fun(s:string):string{
    return s
}


let fun1 = function(x:number,y:number):boolean{
     return x==y
}


interface Fun {
    (x:string,y:string,z:number):string
}
let fun2:Fun = function(a,b,c){
    return a+b+c
}



