var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this)
    console.log(e)
    container.innerHTML = count++;
};


//第一版
function debounce(func,wait){
    
    var timeout
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(func,wait);
    }
}


//第二版
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


//第三版
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

