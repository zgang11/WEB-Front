import {Component,StrictMode} from 'react'
import MemoIndex from './Component/memo'
import StrictModes from './Component/StrictMode'
import Index from './Component/Profiler'
import Fragment from './Component/Fragment'
import Lasy from './Component/Lasy'

//react-hooker
import UseStateDemo from './React-hooks/useState'
import {DemoUseRef, App, Parent,ForwardRef} from './React-hooks/useRef'
import {DemoEffect01, DemoEffect} from './React-hooks/useEffect'
import DemoUseCallback from './React-hooks/useCallBack'
import DemoUseLayoutEffect from './React-hooks/useLayoutEffect'

class ReactApi extends Component{
    render(){
        return (
            <StrictMode>
                {/* <MemoIndex/> 
                <StrictModes/>
                <br/>
                <br/>
                <br/>
                <Index/>
                <br/>
                <br/>
                <br/>
                <Fragment/>
                <br/>
                <Lasy/>
                <br/>
                <UseStateDemo/>
                <br/>
                <DemoEffect01/>
                <br/>
                <DemoEffect/>
                <br/>
                <br/> */}
                {/* <DemoUseCallback id={1}/>
                <br/>*/}
                {/* <DemoUseRef/> */}
                <ForwardRef/>
                <br/>
                {/* <App/> */}
                <br/>
                {/* <Parent/> */}
                {/* <DemoUseLayoutEffect/> */}
            </StrictMode>    
        )
    }
}

export default ReactApi