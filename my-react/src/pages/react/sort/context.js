import React,{createContext} from 'react'
import { Button } from 'antd'

// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = createContext('danger')
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class  ThemedButton extends React.Component  {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  // 将创建的 ThemeContext 对象挂载在 class 上的 contextType 属性 ，通过 this.context可以在任何生命周期中访问到它，包括 render 函数中。
  static contextType = ThemeContext
  // 组件构造函数内获取Context内容
  constructor(props){
    super(props)
    this.state = {contextType:ThemeContext}
  }

  render(){
    // render函数中获取 this.context
    console.log('this.context:',this.context)
    return (<>
       {/* 直接赋值获取当前的Context的值 */}
       <div style={{marginBottom:'12px'}}>
        <Button type={this.state.contextType._currentValue}>按钮色彩（直接获取）</Button>
       </div>
       {/* 通过Consumer获取Context的值 */}
       <ThemeContext.Consumer>{
         value => (<Button type={value}>按钮色彩（Consumer获取）</Button>)
         }</ThemeContext.Consumer>
       {/* 将ThemeContext 对象挂载在 class 获取属性 */}
        <div style={{marginTop:'12px'}}>
         <Button type={this.context}>{this.context}（挂载在组件上获取）</Button>
        </div>
    </>)
  }
}

const ContextKw = () => {
  return(<>
     <ThemeContext.Provider value="primary">
        <Toolbar></Toolbar>
      </ThemeContext.Provider>
      {/* 当前组件所在的组件书没有匹配到Provider */}
      <ThemeContext.Consumer>{
        value => <Button type={value}  style={{marginTop:'12px'}}>默认Context</Button>
      }</ThemeContext.Consumer> 
  </>)}

export default ContextKw