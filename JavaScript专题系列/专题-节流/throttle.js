var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this)
    console.log(e)
    container.innerHTML = count++;
}

// 节流的原理很简单：
// 如果你持续触发事件，每隔一段时间，只执行一次事件。
// 关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。


//使用时间戳
function throttle(func,wait){
    
    var previous = 0
    return function(){
        const date = new Date()
        const context = this
        const args = arguments
        if(date - previous >wait){
            func.apply(context,args)
            previous = date
        }
    }
}


//使用定时器
function throttle1(func,wait){
    var timeout
    return function(){
        var context = this
        var args = arguments
        if(!timeout){
            timeout = setTimeout(()=>{
               timeout = null
               func.apply(context,args)
            },wait)
        }
    }
}


//双剑合璧
//第三版




//container.onmousemove = getUserAction;
container.onmousemove = throttle1(getUserAction,1000)

