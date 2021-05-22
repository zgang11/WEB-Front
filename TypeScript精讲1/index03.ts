/**
 * 属性和方法
 */
type Log = (...data:any[]) =>void
let {log:Log} = console
// log = Log
// debugger
class Animal{
    public name:string
    constructor(name:string){
        this.name = name
    }
    sayHi(){
        Log('this.name:',this.name)
    }
}
// let a = new Animal('jaj')
// a.sayHi()

/**
 * 类的继承
 */
class Cat extends Animal{
    constructor(name:string){
        super(name)
        Log('this:',this,'this.name:',this.name)
    }   
}

let cat = new Cat('little cat')


/**
 * 静态方法
 */
class Life{
    static isLife(params:any):boolean{
        return params instanceof Life
    }
}
let life = new Life()
// Log(Life.isLife(life))
// Log(Life.isLife(cat))

