// 元组
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
// 元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。


//定义一对值分别为 string 和 number 的元组：
let tom:[string,number] = ['string',12]

//当赋值或访问一个已知索引的元素时，会得到正确的类型(可以只赋值其中一项)：
tom[0] = 'what'
tom[1] = 1212
const a = tom[0].slice(0,1)
const b = tom[1].toFixed(2)
console.log(a,b)

//但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。
// let Arr:[string,number] = ['kaj']
let Arr2:[number,number]
// Arr2 = [2]


// 越界的元素§
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
let Arr3:[number,boolean,string]
Arr3 = [12, true, 'jsj']
Arr3.push(true)
Arr3.push()

