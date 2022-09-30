import React from "react";
export default class ClassComp extends React.Component{
    // render必须必须返回必须返回React必须返回React元素 JSx
    state={ //也可以在这里初始化  在super后面运行
        time:this.props.time
    }
    constructor(props){
        super(props) //先用一下父类的构造函数 使this.props=props 
        //初始化状态
        // this.state = {
        //     time:props.time
        // }
        this.timer = setInterval(()=>{
            if(this.state.time <= 0){
                clearInterval()
                return
            }
            this.setState({ //重新设置状态 相当于mixin 混入
                time:this.state.time - 1
            })
        },1000)
    }
    render(){
    return  <div>
        <h1>类组件:{this.state.time}</h1>
        <A time={this.state.time}></A>
    </div>
    }
}


 function A(props) {
  return (
    <div>
      A:{props.time}
      <B time={props.time}/>
    </div>
  )
}



function B(props) {
  return (
    <div>
      B:{props.time}
    </div>
  )
}
