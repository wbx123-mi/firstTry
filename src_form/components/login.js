import React, { Component } from 'react'

export default class login extends Component {
    //#region
    // 高阶函数
    // 如果一个函数接受一个函数作为参数
    // 或者返回一个函数作为返回值 此函数为高阶函数 
    // 常见高阶函数 promise settimeout map filter 等
    //函数的柯里化 ：通过函数调用 继续返回函数的方式  实现多次参数统一处理  就比如下方的handlechange事件 外层函数拿不到event  只有返回的函数才
    //可以拿到  最外层的函数只能拿到传过来的参数  只有 change绑定的事件才可以拿到event 
    //#endregion
    state={
        name:0,
        pwd:''
    } 
    handleAdd=()=>{
      this.setState({
        name:this.state.name + 1
      },()=>{
        console.log(this.state.name)
      })
    }
    handleClick=(event)=>{
        event.preventDefault() //阻止表单的默认提交事件
        alert(`name:${this.state.name},pwd:${this.state.pwd }`)
        // 通过ref拿到input的值，现用现拿 属于非受控组件 
        // 将input里面的值存在state状态里面 属于受控组件
    }
    handleChange=(dataType)=>{ //在这里需要返回一个函数作为change事件的回调函数 如果不是没有返回函数 因为下面的change事件绑定的就是次函数的返回值 所以需要返回一个函数作为返回值用来回调
        // 因为绑定事件的时候有 （）会直接执行 
        console.log(dataType) 
        return (e)=>{
            console.log(e.target.value,[dataType])
            this.setState({
                [dataType]:e.target.value //在这里用    [变量] 来赋值 等同于 对象的  obj[变量]=‘xxx’ => {[变量]：xxxxx}
            })
        }
    }
    handleTwoChange(dataType,e){//这是不用柯里化  返回函数的写法 
        this.setState({
            [dataType]:e.target.value //在这里用    [变量] 来赋值 等同于 对象的  obj[变量]=‘xxx’ => {[变量]：xxxxx}
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>加加加</button>
        <form onSubmit={this.handleClick}>
        <span>{'span:'+this.state.name}</span><br></br>
        {/* <input type="text" onChange={(e)=>{this.handleTwoChange('name',e)}} name="username"></input>  这是常规写法 直接绑定函数 传自己需要的参数*/ }
        <input type="password" onChange={this.handleChange('pwd')} name="password"></input>



        
        
        {/* <input type="text" onChange={this.handleChange('name')} name="username"></input> 这是柯里化写法 返回函数作为返回结果
        <input type="password" onChange={this.handleChange('pwd')} name="password"></input> */}
        <button type="submit">登录</button>
        {/* <button type="reset">登录</button><button >登录</button> */}
        </form>
      </div>
    )
  }
}
