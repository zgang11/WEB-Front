// 泛型
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

function createArray<T>(length:number,value:T):Array<T>{
    let result:T[] = []
    for(let i = 0;i<length;i++){
        result[i] = value
    }
    return result
}
createArray<number>(3,2)


// 多个类型参数§
// 定义泛型的时候，可以一次定义多个类型参数：
function swap<U,T>(tuple:[U,T]):[T,U]{
    return [tuple[1],tuple[0]]
}
swap([7,'jjj'])


// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
// function loggin<T>(arg:T):T{
//     console.log(arg.length)
//     return arg
// }

interface lengthWise {
    length:number
}
function login<T extends lengthWise>(arg:T):T{
    console.log(arg.length)
    return arg
}

// 我们使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性。
// 此时如果调用 loggingIdentity 的时候，传入的 arg 不包含 length，那么在编译阶段就会报错了：
login([])
// login(7)


// 泛型类§
// 与泛型接口类似，泛型也可以用于类的类型定义中：
// class GenericNumber<T>{
//     zero:T
//     add:(x:T,y:T)=> T
// }

// const myGenericNumber = new GenericNumber<number>()
// myGenericNumber.zero = 1
// myGenericNumber.add = function(x,y){
//     return x+y
// }


// 泛型参数的默认类型§
// 在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。
function createArrayList<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
