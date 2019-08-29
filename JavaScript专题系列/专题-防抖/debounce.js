var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this)
    console.log(e)
    container.innerHTML = count++;
};

//防抖：尽管触发了事件，但一定要在事件出发n秒后执行。如果在这n秒内再次出发事件，就以新事件的时间开始，n秒后再次执行这个函数
//第一版
function debounce(func,wait){
    
    var timeout
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(func,wait);
    }
}


//第二版：改变this的指向问题
function debounce2(func,wait){
    var timeout
    
    return function(){
        clearTimeout(timeout)
        var context = this
        timeout = setInterval(function(){
            func.apply(context)
        },wait)
    }
}


//第三版：修改event对象，此时防抖已经趋于完美了。
function debounce3(func,wait){
    var timeout
    return function(){
        clearTimeout(timeout)
        var context = this
        var args = arguments
        timeout = setTimeout(() => {
            func.apply(context,args)
        }, wait);
    }
}
 

//第四版
//需求：出发后立即执行函数，等到出发n秒后，才可以重新触发。
function debounce4(func,wait,immediate){
    var timeout
    return function(){
        var context = this
        var args = arguments
        if(timeout) clearTimeout(timeout)
        if(immediate){
            var callNow = !timeout
            timeout = setTimeout(function(){
                timeout = null
            }, wait);
            if(callNow) func.apply(context,args)
        }else{
            timeout = setTimeout(function(){
                func.apply(context,args)
            },wait)
        }
    }
}


container.onmousemove = getUserAction;
container.onmousemove = debounce4(getUserAction,1000,false)

