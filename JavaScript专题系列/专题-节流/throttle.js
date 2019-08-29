var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this)
    console.log(e)
    container.innerHTML = count++;
};


container.onmousemove = getUserAction;
container.onmousemove = debounce4(getUserAction,1000,false)

