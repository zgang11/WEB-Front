/**
 * 类与接口
 */
interface Alarm{
    alert():string
}
interface  Ele{
    seeOut():void,
    seeIn(parms:number):void
}
class Door{}

class SecurityDoor extends Door implements Alarm{
    alert(){
        console.log('wo ke ye zhao dao')
        return 'jajaj'
    }
}
class Car implements Alarm{
    alert(){
        return 'Car'
    }
}
let test1 = new SecurityDoor()


class Doors implements Alarm,Ele{
     alert(){
         return 'ja'
     }
     seeIn(){

     }
     seeOut(){

     }
}


/**
 * 接口继承类
 */
class Pinter {
    public x:string
    public y:number
    constructor(x:string,y:number){
        this.x = x
        this.y = y
    }
}
interface Pionter3d extends Pinter {
    z:boolean
}
let pionter3d:Pionter3d = {x:'1',y:2,z:true}

