// useRef的作用：

// 一 是可以用来获取dom元素，或者class组件实例 。
// 二 react-hooks原理文章中讲过，创建useRef时候，会创建一个原始对象，只要函数组件不被销毁，原始对象就会一直存在，那么我们可以利用这个特性，来通过useRef保存一些数据。


import {useRef, useState} from 'react'

const DemoUseRef = ()=>{
    const dom= useRef(null)
    const dom01 = useRef(null)
    const handleSubmit = ()=>{
        /*  <div >表单组件</div>  dom 节点 */
        console.log(dom.current)
        console.log("dom01",dom01)
    }
    return <div>
        {/* ref 标记当前dom节点 */}
        <div ref={dom} >表单组件</div>
        <div ref={dom01} >表单组件01010</div>
        <button onClick={()=>handleSubmit()} >提交</button> 
    </div>
}

export default  DemoUseRef
