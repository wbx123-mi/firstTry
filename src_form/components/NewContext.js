import React, { Component } from 'react'
const ctx = React.createContext()
const ctx1 = React.createContext()
export default class NewContext extends Component {
    /*
    创建上下文
    上下文是一个独立于组件的对象
    const ctx = React.createContext()
    Provider 上下文生产者 该组件有一个value
    conSumer 上下文消费者 函数直接返回value 使用 具体看组件A
    上下文的使用
    要使用静态属性来说明自己需要的东西
    类组件需要：
    static contextType = 。。。。。。
    通过 this.context.xxxx获取
    函数组件需要：
    consumer 


    多个组件可以嵌套使用不同 ctx 可以创建多个
    互不干扰
    */
   state={
    name:'wbx',
    age:18,
    changeA:(newName)=>{
        this.setState({
            name:newName
        })
    }
   }
   handleClick=()=>{
    this.setState({
        name:'niubi'
    })
    console.log('点击')
   }
  render() {
    console.log('render')
    const Provider = ctx.Provider
    return (
      <Provider value={this.state}>
        <div>
        <button onClick={this.handleClick}>点击</button>
        <A></A>
        </div>
      </Provider>
    )
  }
}

function A() {
  return (
    <ctx1.Provider value={
        {sex:'nan'}
    }>
        <div>
       <ctx.Consumer>
        {
            value=>
               <h1>{value.name}</h1>
            
        }
       </ctx.Consumer>
      <B></B>
    </div>
    </ctx1.Provider>
  )
}


class B extends Component {
  static contextType = ctx;
  
  render() {
    console.log(this.context)
    return (
      <div>
       <div>{this.context.name}</div>
       <ctx1.Consumer>
        {value=><h3>{value.sex}</h3>}
       </ctx1.Consumer>
       <button onClick={()=>{this.context.changeA('niubi')}}>点击B</button>

      </div>
    )
  }
}
