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
import DemoUseContext  from './React-hooks/useContext&React.createContext/index.js'

class ReactApi extends Component{
    render(){
        return (
            <StrictMode>
                <UseStateDemo/>
                <DemoUseRef/>
                <DemoUseLayoutEffect/>
                <DemoUseContext/>
                {/* <MemoIndex/>  */}
                {/* <StrictModes/> */}
                {/* <Index/> */}
                {/* <Fragment/> */}
                {/* <Lasy/> */}
                {/* <DemoEffect01/> */}
                <br/>
                {/* <DemoEffect/> */}
                <br/>
                <br/>
<<<<<<< HEAD
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
=======
                {/* <DemoUseCallback id={1}/> */}
                <br/>
>>>>>>> 24d8c60a5ff0c8f05dcb997fedd8176aa1ec8bd4
            </StrictMode>    
        )
    }
}

export default ReactApi