// useRef的作用：

// 一 是可以用来获取dom元素，或者class组件实例 。
// 二 react-hooks原理文章中讲过，创建useRef时候，会创建一个原始对象，只要函数组件不被销毁，原始对象就会一直存在，那么我们可以利用这个特性，来通过useRef保存一些数据。


import {useRef, useState, useMemo, useEffect, forwardRef,Component,createRef} from 'react'


//获取dom元素
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

// useRef 返回的 ref 对象在组件的整个生命周期内保持不变，也就是说每次重新渲染函数组件时，返回的ref 对象都是同一个（使用 React.createRef ，每次重新渲染组件都会重新创建 ref）

function App(props){
    const [count, setCount] = useState(0);
  
    const doubleCount = useMemo(() => {
      return 2 * count;
    }, [count]);
  
    //创建一个timerID，在组件渲染过程中不变，方便后期删除
    const timerID = useRef();
    const countId = useRef(count);
    
    useEffect(() => {
     
      timerID.current = setInterval(()=>{
        console.log('timerID.current:',timerID,'countId:',countId)
          setCount(count => count + 1);
         
      }, 1000); 
    }, []);
    
    useEffect(()=>{
        if(count > 10){
            clearInterval(timerID.current);
        }
    },[]);
    
    return (
      <>
        <button onClick={() => {setCount(count + 1)}}>Count: {count}, double: {doubleCount}</button>
      </>
    );
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Parent() {
    let [number, setNumber] = useState(0);
    console.log('number:',number)
    const handleClick = ()=>{
        setNumber(number+1)
    }
    return (
        <>
            <Child />
            <button onClick={() => setNumber(number+1)}>+</button>
        </>
    )
}
let input;
function Child() {
    const inputRef = useRef();
    console.log('更新了')
    console.log('input===inputRef', input === inputRef);
    input = inputRef;
    function getFocus() {
        inputRef.current.focus();
    }
    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={getFocus}>获得焦点</button>
        </>
    )
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// react forward ref的使用
const FocusInput = forwardRef((props,ref)=>
    <input type='text' ref={ref}></input>
)

class ForwardRef extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
    }

    componentDidMount() {
        const { current } = this.ref;
        console.log(current)
        current.focus();
    }

    render() {
        return (
            <div>
                <p>forward ref</p>
                <FocusInput ref={this.ref} />
            </div>
        );
    }
}



export  {DemoUseRef, App, Parent, ForwardRef}
