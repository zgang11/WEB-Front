// useEffect执行顺序: 组件更新挂载完成 -> 浏览器 dom 绘制完成 -> 执行 useEffect 回调。
// useLayoutEffect 执行顺序: 组件更新挂载完成 ->  执行 useLayoutEffect 回调-> 浏览器dom绘制完成。
// 所以说 useLayoutEffect 代码可能会阻塞浏览器的绘制 。我们写的 effect和 useLayoutEffect，react在底层会被分别打上PassiveEffect，HookLayout，在commit阶段区分出，在什么时机执行。

import {useRef, useLayoutEffect} from 'react'
import animate from 'animate'
const DemoUseLayoutEffect = () => {
    const target = useRef()
    useLayoutEffect(() => {
        /*我们需要在dom绘制之前，移动dom到制定位置*/
        // const { x=100 ,y=800 }  = {x,y} /* 获取要移动的 x,y坐标 */
        // animate(target.current,{ x,y })
    }, []);
    return (
        <div >
            <span ref={ target } className="animate">我在这里啊</span>
        </div>
    )
}

export default DemoUseLayoutEffect
